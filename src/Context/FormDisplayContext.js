import { useState ,createContext} from 'react';
const FormDisplayContext = createContext()
export default FormDisplayContext

export const FormDisplayProvider = ({children}) => {
    const [FormDisplay,setFormDisplay]=useState('');//cause there is a lot of button that opens and closes the form when the client is not logged in
    const [register,setRegister] = useState(false);
    const [Flag,setFlag] =useState(null);//to control which icon opens or closes the form

    //when i close the form (there is different ways)
   const UnShowForm= ()=>{
    FormDisplay.classList.remove("FormContainer-display");
    document.getElementById("myForm").reset();
    setRegister(false);
    document.querySelector('.FormContainer').style.top='20%';
    const inputs =document.getElementsByClassName('inputBox');
    for (const input of inputs) { 
        if(input.children[0].value===''){
            input.style.border="2px solid rgba(255,255,255,.2)"
    }}
}
 // when click on register not login what should i do
 const SwitchToRegister=()=>{
    setRegister(true);
    document.querySelector('.FormContainer').style.top='0px';
}

const ShowForm =(flag)=>{
        if(FormDisplay.className==="FormContainer"){
            FormDisplay.classList.add("FormContainer-display");
             setFlag(flag);
        }else if(FormDisplay.className==="FormContainer FormContainer-display" && Flag===flag){
            FormDisplay.classList.remove("FormContainer-display");
            setFlag(null)
        }
}

    let contextDaTa = {
        FormDisplay:FormDisplay,
        setFormDisplay:setFormDisplay,
        UnShowForm:UnShowForm,
        register:register,
        SwitchToRegister:SwitchToRegister,
        ShowForm:ShowForm,
        setFlag:setFlag

    }
    return(
        <FormDisplayContext.Provider value={contextDaTa}>
            {children}
        </FormDisplayContext.Provider>
    )
}