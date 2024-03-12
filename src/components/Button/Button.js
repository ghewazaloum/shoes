import { useContext } from 'react';
import './Button.css'
import AuthContext from '../../Context/AuthContext';
import FormDisplayContext from '../../Context/FormDisplayContext';
;
function Button({content}){
    return(
    <button className='RegisterOrLogin'>{content}</button>
    );
}
function AddButton({content}){
    return(
    <button className='add'>{content}</button>
    );
}
function PaymentButton({content}){
    const {ShowPaymentForm} = useContext(FormDisplayContext)
    return(
    <button onClick={()=>{ShowPaymentForm()}} className='Payment'>{content}</button>
    );
}
function ClearButton({content}){
    const {clearCart} = useContext(AuthContext)

    return(
    <button  onClick={()=>{clearCart('cart updated')}} className='clear'>{content}</button>
    );
}
export default Button
export {AddButton}
export {PaymentButton}
export {ClearButton}