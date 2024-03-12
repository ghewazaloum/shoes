import React, { useEffect, useState } from 'react'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import {PaymentForm} from '../index'
import './StripeContainer.css'

const PUBLIC_KEY="pk_test_51OhozDKQB9oTuSLv6mbcnmNvNtimNFS5IUGX5PjTT0Fec9SMzC8qKNJjapkWxfsZoz4sqvZWvi8usRSsn0OZ1qUp00GYrtghAS"
const StripeContainer = () => {
  const [stripeTestPromise,setStripeTestPromise] = useState('');
  useEffect(()=>{
    setStripeTestPromise(loadStripe(PUBLIC_KEY))
  },[])

  return (
    <>
    {stripeTestPromise&&
    <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
    </Elements>
    }
    </>
  )
}

export default StripeContainer
