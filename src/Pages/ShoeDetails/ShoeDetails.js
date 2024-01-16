import './ShoeDetails.css'
import shoe from '../../Assests/Images/shoe.png'
function ShoeDetails (props){
    return(
        <div className="ShoeDetails">
            <div>
                <div>
                    <img src={shoe} />
                </div>
            </div>
        </div>
    );
}
export default ShoeDetails