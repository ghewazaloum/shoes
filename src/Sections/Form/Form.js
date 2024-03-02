import './Form.css'
import {Button,InputBox} from '../../components/index'
import { FaUser } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FormDisplayContext from '../../Context/FormDisplayContext';
import AuthContext from '../../Context/AuthContext';


function Form (){
    const { SwitchToRegister ,register} = useContext(FormDisplayContext); 
    const {submit ,UnShowForm} = useContext(AuthContext); 

    return(
        <div autoComplete="off" id='FormContainer' className="FormContainer">
            <form id="myForm" onSubmit={submit} action=''>
                <IoIosClose onClick={()=>{UnShowForm()}} className='btn-close'/>
                {register===false?
                <div>
                <h2>login</h2>
                <InputBox>
                    <input className='login' name='username' placeholder='username' type='text'/>
                    <i><FaUser/></i>
                </InputBox>
                <InputBox>
                    <input className='login' name='password' placeholder='password' type='password'/>
                    <i><RiLockPasswordFill/></i>
                </InputBox>
                <h1 className='forget-password'>forget password?</h1>
                <Button type='submit' content='login'/>
                <p>dont have an account? <Link onClick={()=>{SwitchToRegister()}}>register</Link> </p> 
                </div>:
                <>
                <h2>register</h2>
                <InputBox>
                    <input name='first_name' placeholder='first name' type='text'/>
                </InputBox>
                <InputBox>
                    <input name="last_name" placeholder='last name' type='text'/>
                </InputBox>
                <InputBox>
                    <input name='username' placeholder='username' type='text'/>
                </InputBox>
                <InputBox>
                    <input name='email' placeholder='email' type='email'/>
                </InputBox>
                <InputBox>
                    <input name='password' placeholder='password' type='password'/>
                </InputBox>
                <InputBox>
                    <input name='password2' placeholder='re-enter password ' type='password'/>
                </InputBox>
                <Button type='submit' content='register'/>
                </>
                }
            </form>
        </div>
    );
}
export default Form