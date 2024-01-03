import './Headers.css'
function Headers (props){
    return(
        <h1 className="headers">
            {props.children}
        </h1>
    );
}
export default Headers