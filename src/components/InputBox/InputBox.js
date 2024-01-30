import './InputBox.css'
function InputBox (props){
    return(
        <div className='inputBox'>
            {props.children}
         </div>
    );
}
export default InputBox