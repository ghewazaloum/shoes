import { Link } from 'react-router-dom';
import './Logo.css'
function Logo (){
    return(
        <Link to='/' className="Logo">
            s<span>neak<span>peak</span></span>
        </Link>
    );
}
export default Logo