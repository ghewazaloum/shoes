import './CardInfo.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardInfo ({image,name,category_slug}){
    return(
        <div className='card'>
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