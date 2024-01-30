import './Input.css'
function Input ({text,type}){
    return(
        <input placeholder={text} type={type} required/>
    );
}
export default Input