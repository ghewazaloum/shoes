import axios from 'axios';
import {useState,useEffect,createContext, useContext} from 'react'
import FormDisplayContext from './FormDisplayContext'
import ShoesContext from './ShoesContext';
import ToastContext from "./ToastContext";
import { useNavigate } from 'react-router-dom';
import { Loader } from '../components/index';

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const {UnShowForm,setFormDisplay,register,ShowForm,setPaymentFormDisplay} = useContext(FormDisplayContext); 
    const {toastDisplay} = useContext(ToastContext); 
    let [user ,setUser ] = useState(null);
    let [authTokens,setAuthTokens] =useState(()=>localStorage.getItem('authTokens')?JSON.parse(localStorage.getItem('authTokens')):null);
    const [isLoggedIn,setIsLoggedIn]=useState(()=>localStorage.getItem('authTokens')?true:false);
    const [loading,setLoading] = useState(true)
    const [cartShoes,setCartShoes] = useState ();
    const {neededQuantity,setneededQuantity} = useContext(ShoesContext);//needed quan

    //send the inputs for login or signup and handle the results
    const submit = e => {
        e.preventDefault();
        if (register===true){ //register
            if(e.target.username.value!==''&&e.target.email.value!==''&&e.target.first_name.value!==''&&
            e.target.last_name.value!==''&&e.target.password.value!==''&&e.target.password.value){//if all fields written
                if(e.target.password.value===e.target.password2.value){//and the passwords is equal
                    axios.post('http://localhost:8000/api/register/', {
                        first_name:e.target.first_name.value,
                        last_name:e.target.last_name.value,
                        username:e.target.username.value,
                        email:e.target.email.value,
                        password: e.target.password.value,
                        password2: e.target.password2.value
                    })
                    .then(function (response) {
                        UnShowForm();
                        document.getElementById("myForm").reset();
                        toastDisplay('success','you are WELCOME , please login and continue your journey');
                        ShowForm()
                    })
                    .catch(function (error) {
                        //registered before
                        const inputs =document.getElementsByClassName('inputBox');
                        for (const input of inputs) { 
                            input.style.border="2px solid var(--color-orange)"
                        }
                        toastDisplay('error','there is an Error in your data')
                    });
                }else{//the passwords are not equal
                    const inputs =document.getElementsByClassName('inputBox');
                    for (const input of inputs) { 
                        if(input.children[0].type==='password'){
                            input.style.border="2px solid var(--color-orange)"
                    }}
                    toastDisplay('warn','this two passords are not equal,check them please')
                }
                }else{//the fields one or more of them are empty
                const inputs =document.getElementsByClassName('inputBox');
                for (const input of inputs) { 
                    if(input.children[0].value===''){
                        input.style.border="2px solid var(--color-orange)"
                }}
                toastDisplay('warn','Do not miss REQUIRED fields ')
            }
        
        }else{//login
        if(e.target.username.value!==''&&e.target.password.value!==''){
            axios.post('http://localhost:8000/api/token/', {
                username:e.target.username.value,
                password:e.target.password.value,
            })
            .then(function (response) {
                setAuthTokens(response.data)
                setIsLoggedIn(true);
                localStorage.setItem('authTokens',JSON.stringify(response.data))
                UnShowForm();
                document.getElementById("myForm").reset();
                toastDisplay('success','You are LOGGED IN,Enjoy!')
            })
            .catch(function (error) {//there is an failed input or he is not registered
                const inputsDiv =document.getElementById('myForm').getElementsByTagName('div');
                for (const input of inputsDiv) { 
                    if(input.children[0].value!==''&&input.children[0].className==="login"){
                        input.style.border="2px solid red"
                }}
                toastDisplay('error','make sure Your data is right!')
            });
        }else{
            const inputsDiv =document.getElementById('myForm').getElementsByTagName('div');
            for (const input of inputsDiv) { 
                if(input.children[0].value===''){
                    input.style.border="2px solid var(--color-orange)"
            }}
            toastDisplay('warn','Do not miss REQUIRED fields ')
        }
    }
    }


    //profile 
    const UserInfoGet = () => {
        axios.get('http://localhost:8000/api/profile/',{
        headers: {
            "Authorization" : `Bearer ${authTokens.access}`
        }
            })
        .then(function (response) {
            setUser(response.data);
        })
        .catch(function (error) {
        console.log(error);
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens')
        setIsLoggedIn(false);
        });
    }


    //logout 
    const Logout = () => {
        axios.post('http://localhost:8000/api/logout/',{
            refresh_token:authTokens.refresh
        },{
        headers: {
            "Authorization" : `Bearer ${authTokens.access}`
        }
        })
        .then(function (response) {
            setAuthTokens(null);
            setUser(null);
            localStorage.removeItem('authTokens')
            setIsLoggedIn(false);
            toastDisplay('warn','you are LOGGED OUT')
        })
        .catch(function (error) {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens')
        setIsLoggedIn(false);
        });
    }        

    //fuction to refresh the tokens
    function refreshTokens(){
        if(authTokens!==null){
            axios.post('http://localhost:8000/api/token/refresh/', {
                refresh:authTokens?.refresh
            },{
            headers: {
                "Authorization" : `Bearer ${authTokens?.access}`
            }
            })
            .then(function (response) {
                setAuthTokens(response.data)
                localStorage.setItem('authTokens',JSON.stringify(response.data))
            })
            .catch(function (error) {
            console.log(error);
            setAuthTokens(null);
            setUser(null);
            localStorage.removeItem('authTokens')
            setIsLoggedIn(false);
            });}
            if(loading){
                setLoading(false)
            }
    }

    useEffect(()=>{
        if(document.querySelector("#FormContainer")){
            setFormDisplay(document.querySelector("#FormContainer"));
            }//initial value for formDisplay is the form itself   
        if(document.querySelector(".stripe-form")){
            setPaymentFormDisplay(document.querySelector(".stripe-form"));
            }//initial value for paymentformDisplay is the form itself       
        if (loading){
            refreshTokens();
        }
        let fourminutes = 1000 * 60 *4 ;
        let interval =setInterval(()=>{
            if(authTokens){
                refreshTokens()
            }
        },fourminutes)
        return ()=>clearInterval(interval)
    },[authTokens,loading,refreshTokens,setFormDisplay])

//cart functions
    const cart = () =>[
        axios.get('http://127.0.0.1:8000/payment/cart/',{
            headers: {
                "Authorization" : `Bearer ${authTokens?.access}`
            }})
        .then((res)=>{
            setCartShoes(res.data);
        })
        .catch(function (error) {
            console.log(error);
            })   
    ]
    const addToCart = (SelectedSizeID)=>{
        console.log(neededQuantity);
        if(neededQuantity!==0){
            axios.post('http://127.0.0.1:8000/payment/cart/', {
                id:SelectedSizeID,
                quantity:neededQuantity
            },{
            headers: {
                "Authorization" : `Bearer ${authTokens?.access}`
            }
            })
            .then(function (response) {
                toastDisplay('success',response.data.msg)
                setneededQuantity(0)
            })
            .catch(function (error) {
            console.log(error);
            });
    }else{
        toastDisplay('warn','you must choose color,size and quantity to complete this process')
    }
}
    const removeFromCart = (SelectedSizeID)=>{
        if(SelectedSizeID){
            axios.post('http://127.0.0.1:8000/payment/cart/', {
                id:SelectedSizeID,
                "remove":true,
            },{
            headers: {
                "Authorization" : `Bearer ${authTokens?.access}`
            }
            })
            .then(function (response) {
                toastDisplay('success',response.data.msg)
                cart();

            })
            .catch(function (error) {
            console.log(error);
            });
    }}

    const clearCart = ()=>{
            axios.post('http://127.0.0.1:8000/payment/cart/', {
                "clear":true,
            },{
            headers: {
                "Authorization" : `Bearer ${authTokens?.access}`
            }
            })
            .then(function (response) {
                toastDisplay('success',response.data.msg)
                cart();
                navigate('/')
            })
            .catch(function (error) {
            console.log(error);
            });
    }

    let contextDaTa = {
        user:user,
        submit:submit,
        isLoggedIn,isLoggedIn,
        UnShowForm:UnShowForm,
        authTokens:authTokens,
        Logout:Logout,
        UserInfoGet:UserInfoGet,
        addToCart:addToCart,
        cartShoes:cartShoes,
        cart:cart,
        removeFromCart:removeFromCart,
        clearCart:clearCart
    }



    return(
        <AuthContext.Provider value={contextDaTa}>
            {loading?<Loader/>:children}
        </AuthContext.Provider>
    )
}