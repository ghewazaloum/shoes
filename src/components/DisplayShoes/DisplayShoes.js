import './DisplayShoes.css'
import img1 from '../../Assests/Images/1.jpg'
import img2 from '../../Assests/Images/2.jpg'
function DisplayShoes (){
    return(
        <div className="DisplayShoes">
            <div className='shoe'>
                <img  src={img1} alt=''/>
            </div>
            <div className='shoe'>
                <img src={img2} alt=''/>
            </div>
            <div className='shoe'>
                <img src={img1} alt=''/>
            </div>
            

        </div>
    );
}
export default DisplayShoes