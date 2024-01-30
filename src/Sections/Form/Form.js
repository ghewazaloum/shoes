import './Form.css'
import {Button, Input,InputBox} from '../../components/index'
import { FaUser } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormDisplayContext } from '../../App';
function Form (){
    const [register,setRegister] = useState(false);
    const {FormDisplay,setFormDisplay} = useContext(FormDisplayContext);
    const SwitchToRegister=()=>{
        setRegister(true);
        document.querySelector('.FormContainer').style.top='0px';
    }
    const UnShowForm= ()=>{
        FormDisplay.classList.remove("FormContainer-display");
    }
    return(
        <div id='FormContainer' className="FormContainer">
            <form action=''>
                <IoIosClose onClick={()=>{UnShowForm()}} className='btn-close'/>
                {register===false?
                <>
                <h2>login</h2>
                <InputBox>
                    <Input text='username' type='text'/>
                    <i><FaUser/></i>
                </InputBox>
                <InputBox>
                    <Input text='password' type='text'/>
                    <i><RiLockPasswordFill/></i>
                </InputBox>
                <h1 className='forget-password'>forget password?</h1>
                <Button content='login'/>
                <p>dont have an account? <Link onClick={()=>{SwitchToRegister()}}>register</Link> </p> 
                </>:
                <>
                <h2>register</h2>
                <InputBox>
                    <Input text='first name' type='text'/>
                </InputBox>
                <InputBox>
                    <Input text='last name' type='text'/>
                </InputBox>
                <InputBox>
                    <Input text='username' type='text'/>
                </InputBox>
                <InputBox>
                    <Input text='email' type='email'/>
                </InputBox>
                <InputBox>
                    <Input text='password' type='password'/>
                </InputBox>
                <InputBox>
                    <Input text='re-enter password ' type='password'/>
                </InputBox>
                <Button content='register'/>
                </>
                }
            </form>
        </div>
    );
}
export default Form