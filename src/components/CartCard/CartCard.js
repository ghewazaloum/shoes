import './CartCard.css'
import { MdDelete } from "react-icons/md";
import AuthContext from '../../Context/AuthContext';
import { useContext } from 'react';
import ShoesContext from '../../Context/ShoesContext';

function CartCard ({id,imageAndsizeAndPrice,quantity,price}) {
    const {removeFromCart} = useContext(AuthContext);
    const {setSelectedSizeID,SelectedSizeID}=useContext(ShoesContext);//link 
    let image='';
    let size='';
    let price_for_pair='';
    if(imageAndsizeAndPrice){
        image=imageAndsizeAndPrice.color.image;
        price_for_pair=imageAndsizeAndPrice.color.price
        size =imageAndsizeAndPrice.size;
    }
    const deleteOrder = (id) =>{
        if(id)
        {
        setSelectedSizeID(id);
        removeFromCart(SelectedSizeID);
    }
    }
    return(
        <>
        {image!==''&&size!==''?
        <div className="CartCard">
            <div className='quantity'><p>{quantity}</p></div>
            <div className='deleteOrder'onClick={()=>deleteOrder(id)}><MdDelete /></div>
            <img src={`http://localhost:8000${image}`} alt='' />
            <div className='info'>
                <p>size : {size}</p>
                <span>price :{price_for_pair} $</span>
                <span> total price : {price} $ </span>
            </div>
        </div>:null}
        </>
    );
}
export default CartCard;