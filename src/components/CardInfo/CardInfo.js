import './CardInfo.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { SelectedShoeContext } from '../../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function CardInfo ({pk,image,name,category_slug}){
  const navigate =useNavigate();
  const {setSelectedShoe}=useContext(SelectedShoeContext);
  const NavigateToShoeDetail=(pk)=>{
    setSelectedShoe(pk);
    navigate("/ShoeDetails")
  }
    return(
        <div className='card' onClick={()=>{NavigateToShoeDetail(pk)}}>
          <div className='imagebox'>
            <img src={image}/>
          </div>
          <div className='cardContent'>
            <h5>{name}</h5>
            <h6>{category_slug}</h6>
          </div>
        </div>
    );
}
export default CardInfo