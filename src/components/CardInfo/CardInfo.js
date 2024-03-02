import './CardInfo.css';
import ShoesContext from '../../Context/ShoesContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function CardInfo ({url,image,name,category_slug}){
  const navigate =useNavigate();
  const {setSelectedShoe}=useContext(ShoesContext);
  
  const NavigateToShoeDetail=(url)=>{
    setSelectedShoe(url);
    navigate("/ShoeDetails")
  }
    return(
        <div className='card' onClick={()=>{NavigateToShoeDetail(url)}}>
          <div className='imagebox'>
            <img src={image} alt=' '/>
          </div>
          <div className='cardContent'>
            <h5>{name}</h5>
            {/* <h6>{category_slug}</h6> */}
          </div>
        </div>
    );
}
export default CardInfo