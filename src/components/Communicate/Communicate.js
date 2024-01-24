import { Link } from 'react-router-dom';
import './Communicate.css'
import { FaFacebookF,FaTiktok ,FaInstagram  } from "react-icons/fa";
function Communicate (){
    return(
        <div className="communicate">
            <Link className='facebook'>
                <FaFacebookF/>
            </Link>
            <Link>
                <FaTiktok/>
            </Link>
            <Link>
                <FaInstagram/>
            </Link>
             
        </div>
    );
}
export default Communicate