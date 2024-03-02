import './InputBox.css'
function InputBox (props){
    const initInput = () => {
        const inputs =document.getElementsByClassName('inputBox');
        for (const input of inputs) { 
            if(input.children[0].value===''){
                input.style.border="2px solid rgba(255,255,255,.2)"
        }}
    }
    return(
        <div className={`inputBox ${props.cname}`} onClick={()=>{initInput()}}>
            {props.children}
         </div>
    );
}
export default InputBox