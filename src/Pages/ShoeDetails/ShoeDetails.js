import { useContext, useEffect, useState } from 'react';
import ShoesContext from '../../Context/ShoesContext';
import './ShoeDetails.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AddButton, Container, IncrementDecrementBtn } from '../../components';
import AuthContext from '../../Context/AuthContext';

function ShoeDetails (){
    const {SelectedShoe,setSelectedSizeID,SelectedSizeID}=useContext(ShoesContext);//link 
    const [SelectedShoeDetails,setSelectedShoeDetails] = useState('');//info in the link
    const [shoeColors,setShoeColors] = useState('');//multiple colors
    const [ShowColorDetails,setShowColorDetails]=useState('');//boolean
    const [SelectedColor,setSelectedColor]=useState('');//specific color
    const [quantity,setQuantity] = useState(0);//the all quantity of shoe selected
    const [sizeSelected,setSizeSelected]=useState(0);//to display the size number
    const {isLoggedIn,addToCart} = useContext(AuthContext); 

    let tags='';
    
    useEffect(()=>{
        if(SelectedShoe!==''){
            axios.get(`${SelectedShoe}`)
            .then(res=>{
                setSelectedShoeDetails(res.data);
                axios.get(`${res.data.colors_url}`)
                .then(res=>{
                    setShoeColors(res.data.results);
                    })
                })
        if(isLoggedIn){
            document.querySelector('.shoe-content').style.paddingTop='60px'
        }else{
            document.querySelector('.shoe-content').style.paddingTop='20px'
        }       
        }
        //animation handling
        if(SelectedColor?.image3===null||SelectedColor?.image2===null){
            document.querySelector(".image-scroller").style.animationName="twoImage_scroller"
        }
        if(SelectedColor?.image3===null&&SelectedColor?.image2===null){
            document.querySelector(".image-scroller").style.animationName=""
        }
    },[SelectedShoe,isLoggedIn,SelectedColor])

    //to display tags
    if(SelectedShoeDetails!==''){
        SelectedShoeDetails.tags.map((tag)=>{return tags=tags+"  "+tag});  
    }
    
    //boolean to check when select a color of the shoe
    const showColorDetails=(color)=>{
        setShowColorDetails(true);
        setSelectedColor(color);
        setSizeSelected(0);
    }
    const WhenSizeSelected = (quantity,size,id)=>{
        setQuantity(quantity);
        setSizeSelected(size);
        setSelectedSizeID(id);
    }

    return(
        <div className="ShoeDetails">
            <Container>
                {SelectedShoe!==''?
                    <>
                        <div className='shoe-image'>
                            {ShowColorDetails===true?

                            <div className='image-scroller'>
                                <img className='img1' src={SelectedColor.image} alt=''/>
                                {SelectedColor.image2&&
                                <img className='img2' src={SelectedColor.image2} alt=''/>}
                                {SelectedColor.image3&&
                                <img className='img3' src={SelectedColor.image3} alt=''/>}
                            </div>
                            :
                            <img src={SelectedShoeDetails.image} alt=''/>
                            }
                        </div>
                        <div className='shoe-content'>
                            {isLoggedIn?
                               <Link onClick={()=>{addToCart(SelectedSizeID)}}><AddButton content='Add to cart'/></Link>:null
                             } 
                            <h2>{SelectedShoeDetails.name}</h2>
                            <span>{SelectedShoeDetails.slug} - {SelectedShoeDetails.category_slug}</span>
                            <span>{SelectedShoeDetails.description}</span>
                            <p>Available for : {tags} </p>
                            <p>colors :</p>
                            <div className='color_scroller'>
                            {shoeColors!==''&&
                            shoeColors.map((color)=>{
                                return(
                                    <div key={color.name} className='color' style={{backgroundColor: color.hex}} onClick={()=>showColorDetails(color)}></div>
                                );})}
                            </div>
                            {ShowColorDetails===true&&
                            <>
                                <p>{SelectedColor.name} - {SelectedColor.price} $</p>
                                <div style={{display:"flex",gap:'10px',width:'95%'}}>
                                    <p style={{minWidth:"45px"}}>Sizes :</p>
                                    <div className='size_scroller'> 
                                        {SelectedColor.sizes.map((size)=>{
                                            return(
                                            SelectedColor.hex!=='#FFFFFF'?
                                            <div key={size.id} style={{backgroundColor: SelectedColor.hex}} onClick={()=>{WhenSizeSelected(size.quantity,size.size,size.id)}} className='size'>
                                                <p>{parseInt(size.size)}</p>
                                            </div>:
                                            <div  key={size.id} style={{backgroundColor: SelectedColor.hex,color:'black',fontWeight:'bold'}} onClick={()=>{WhenSizeSelected(size.quantity,size.size,size.id)}} className='size'>
                                                <p>{parseInt(size.size)}</p>
                                            </div>)
                                        })}
                                    </div>
                                </div>
                                {sizeSelected!==0?
                                <div style={{display:"flex",width:"95%",gap:"20px"}}>
                                <p>Size {parseInt(sizeSelected)} : {quantity} in stock</p>
                                {isLoggedIn?
                                <IncrementDecrementBtn maxValue={quantity}/>
                                 :null} 
                                </div>
                                :null}
                                
                            </>}
                        </div>
                    </>:null}
            </Container>
        </div>
    );
}
export default ShoeDetails
