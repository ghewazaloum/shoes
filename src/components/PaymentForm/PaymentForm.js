import React,{useContext, useState} from 'react'
import {CardElement,useElements,useStripe} from "@stripe/react-stripe-js"
import axios from 'axios'
import './PaymentForm.css'
import InputBox from '../InputBox/InputBox'
import { IoIosClose } from "react-icons/io";
import ToastContext from "../../Context/ToastContext";
import FormDisplayContext from '../../Context/FormDisplayContext'
import AuthContext from '../../Context/AuthContext'

const CARD_OPTIONS = {
    style:{
        base:{
            color:"#fff",
            "::placeholder":{color:"rgba(255,255,255,.4)"}
        },
        invalid:{
            iconColor:"#ffc7ee",
            color:"#ffc7ee"
        }
    }
}

const PaymentForm = () => {
    const {clearCart,authTokens} = useContext(AuthContext)
    const {toastDisplay} = useContext(ToastContext);
    const {UnShowPaymentForm,address,setAddress} = useContext(FormDisplayContext); 
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const stripe = useStripe();
    const elements = useElements();
// Handle real-time validation errors from the CardElement.
const handleChange = (event) => {
  if (event.error) {
    setError(event.error.message);
  } else {
    setError(null);
  }
}
// Handle form submission.
const handleSubmit = async (event) => {
    event.preventDefault();
    if(!address){
        const card = elements.getElement(CardElement);
        const {paymentMethod, error} = await stripe.createPaymentMethod({
          type: 'card',
          card: card
        });
        if(paymentMethod){
          axios.post('http://127.0.0.1:8000/payment/create-checkout-session/'`${paymentMethod.id}/`, {
                email,
                payment_method_id: paymentMethod.id
                },{
                headers: {
                    "Authorization" : `Bearer ${authTokens?.access}`
                }
                }).then(response => {
                    console.log(response.data);
                }).catch(error => {
                    console.log(error)
                })
        }
        setAddress(true)
        setEmail('');
    }
    else{
        setAddress(false)
        UnShowPaymentForm()
        clearCart();
        toastDisplay('success','DONE');
        setEmail('');
    }}
 
  return (
    <form id="stripe-form" onSubmit={handleSubmit} className="stripe-form">
      <IoIosClose onClick={()=>{UnShowPaymentForm()}} className='btn-close'/>
      {!address?
      <>
      <div className="form-row">
          <label htmlFor="email">Email Address :</label>
          <InputBox>
              <input className="form-input" id="email" name="name" type="email" placeholder="jenny.rosen@example.com" required 
                  value={email} onChange={(event) => {setEmail(event.target.value)}} />
          </InputBox>    
      </div>
      <div className="form-row">
          <label for="card-element">Credit or debit card :</label> 
          <InputBox>
              <CardElement id="card-element" options={CARD_OPTIONS} onChange={handleChange}/>
          </InputBox>
          <div className="card-errors" role="alert">{error}</div>
      </div>
      <button type='submit' className="submit-btn">Submit Payment</button>
      </>
      :
      <>
       <h2>shipping information</h2>
        <InputBox>
            <input name='street' placeholder='street' type='text'/>
        </InputBox>
        <InputBox>
            <input name="city" placeholder='city' type='text'/>
        </InputBox>
        <InputBox>
            <input name='postcode' placeholder='postcode' type='text'/>
        </InputBox>
        <InputBox>
            <input name='country' placeholder='country' type='text'/>
        </InputBox>
        <button type='submit' className="submit-btn" >Ok</button>
      </>}
</form>

  )
}

export default PaymentForm
