
import { useContext, useEffect } from 'react';
import AuthContext from '../../Context/AuthContext';
import { CartCard ,ClearButton,ColumnContainer, Heading, PaymentButton} from '../../components/index';
import './Cart.css' 

function Cart () {
    const {cartShoes,cart,isLoggedIn} = useContext(AuthContext);
    useEffect(()=>{
        if(isLoggedIn){
            cart();
        }
    },[])
    const order =cartShoes?.cart_details?.items?.map((Card)=>{
        return(
            <CartCard
                key={Card.shoe.id}
                id={Card.shoe.id}
                imageAndsizeAndPrice={Card.shoe}
                quantity={Card.quantity}
                price={Card.price}
                />
        );
      });


    return(
        <>
        {cartShoes&& 
        <>
            <div  className='cartDiv'>
                {
                order?
                <>
                    <Heading statement='my cart' money={`- ${cartShoes.cart_details.total_price} $`}/>
                    <div className='buttons'>
                        <PaymentButton content='checkout'/>
                        <ClearButton content='clear'/>
                    </div>
                </>
                :
                <Heading statement='my cart' />
                }
            </div>
            <ColumnContainer>
                {order}
            </ColumnContainer>
            </>
            }
        </>
    );
}
export default Cart