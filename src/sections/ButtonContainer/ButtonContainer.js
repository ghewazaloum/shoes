import './ButtonContainer.css'
function ButtonContainer (props){
    return(
        <div className="ButtonContainer">
            {props.children}
        </div>
    );
}
export default ButtonContainer