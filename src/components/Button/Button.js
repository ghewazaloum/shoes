import './Button.css'
function Button (props){
    return(
        <button className="Button">
            <a>
                {props.children}
            </a>
        </button>
    );
}
function WideButton (props){
    return(
        <button className="WideButton">
            <a>
                {props.children}
            </a>
        </button>
    );
}
export default Button
export {WideButton}