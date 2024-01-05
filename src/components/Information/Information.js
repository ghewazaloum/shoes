
import './Information.css'
function Information(props){
    return(
        <div className='information'>
           {props.children}
        </div>
    );
}
export default Information