import './Footer.css'
import {Communicate, Search} from '../index'
import { Separator } from '../../sections';
function Footer (){
    return(
        <div className='footer'>
            <div className='firstSection'>
                    <div>
                        <h1 className="logo">
                            <span className='span1'>sneak</span>
                            <span className='span2'>peak</span>
                        </h1>
                    </div>
                    <div>
                        <ul >
                            <li><a>Home</a></li>
                            <li><a>Skills</a></li>
                            <li><a>education</a></li>
                            <li><a>Work</a></li>
                        </ul>
                    </div>
                    <Communicate/>
            </div>
            <Separator/>
            <Search/>
        </div>
    );
}
export default Footer