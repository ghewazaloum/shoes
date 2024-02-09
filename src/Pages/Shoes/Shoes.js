import { CardInfo } from '../../components/index';
import './Shoes.css'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CategoriesContext, CategoryNameContext, SelectedShoeContext } from "../../App";
function Shoes (){
  const categories=useContext(CategoriesContext);
  const [Category_Shoes,setCategory_Shoes] =useState('');
  const {CategoryName} = useContext(CategoryNameContext);
  let shoe_By_Category;
    useEffect(()=>{
        if(categories!==''){
            categories.map((category)=>{
                {category.name===CategoryName&&
                    axios.get(`${category.url}`)
                    .then(res=>{
                        setCategory_Shoes(res.data.results);
                    })
                }
        })
        }
    },[categories,CategoryName])
  if(Category_Shoes!==''){
    shoe_By_Category =Category_Shoes.map((shoe_By_Category)=>{
        return(
            <CardInfo
                key={shoe_By_Category.pk}
                pk={shoe_By_Category.pk}
                image={shoe_By_Category.image}
                name={shoe_By_Category.name}
                category_slug={shoe_By_Category.category_slug}
                />
        );
    })
}
    return(
        <div className="Shoes">
            {shoe_By_Category }
        </div>
    );
}
export default Shoes