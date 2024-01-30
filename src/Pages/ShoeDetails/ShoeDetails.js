import { useContext, useEffect, useState } from 'react';
import { CategoriesContext, CategoryNameContext, SelectedShoeContext } from '../../App';
import './ShoeDetails.css'
import axios from 'axios';
import { CardInfo } from '../../components/index';
function ShoeDetails (){
    const categories=useContext(CategoriesContext);
    const {SelectedShoe}=useContext(SelectedShoeContext);
    const {CategoryName} = useContext(CategoryNameContext);
    const [ShoeDetails,setShoeDetails] =useState('');
    const [shoeByColor,setShoeByColor] = useState('');
    let tags='';
    useEffect(()=>{
        if(categories!==''){
            categories.map((category)=>{
                {category.name===CategoryName&&
                    axios.get(`${category.url}`)
                    .then(res=>{
                          res.data.results.map((shoe)=>{
                            if(shoe.pk===SelectedShoe){
                                setShoeDetails(shoe)
                            }
                          });
                    })
                }
        })
        }
    },[categories,CategoryName,SelectedShoe])
    
if(ShoeDetails!==''){
    ShoeDetails.tags.map((tag)=>{tags=tags+"    "+tag});
    axios.get(`${ShoeDetails.colors_url}`)
                    .then(res=>{
                          res.data.results.map((shoe_by_color)=>{
                            setShoeByColor(shoe_by_color)
                          });
                    })

}

    return(
        <div className="ShoeDetails">
            <div className='shoe-image'><img src={ShoeDetails.image}/></div>
            <div className='shoe-content'>
                <h2>{ShoeDetails.name}</h2>
                <span>slug : {ShoeDetails.slug}</span>
                <span>category : {ShoeDetails.category_slug}</span>
                <p>{ShoeDetails.description}</p>
                <p>available for : {tags} </p>
            </div>
        </div>
    );
}
export default ShoeDetails