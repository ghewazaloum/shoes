import { Logo,Communicate } from '../../components/index';
import './Footer.css'
function Footer (){
    return(
        <div className='footer'>
            <Logo/>
            <h6>contact us on</h6>
            <Communicate/>
        </div>
    );
}
export default Footer