import { useContext } from 'react';
import './Button.css'
import AuthContext from '../../Context/AuthContext';
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
    return(
    <button className='Payment'>{content}</button>
    );
}
function ClearButton({content}){
    const {clearCart} = useContext(AuthContext)

    return(
    <button onClick={()=>{clearCart()}} className='clear'>{content}</button>
    );
}
export default Button
export {AddButton}
export {PaymentButton}
export {ClearButton}