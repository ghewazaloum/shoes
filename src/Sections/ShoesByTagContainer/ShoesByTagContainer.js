import axios from 'axios';
import { CardInfo } from '../../components/index';
import './ShoesByTagContainer.css'
import { useEffect, useState } from 'react';
function ShoesByTagContainer ({shoes,tag}){
    let shoe;
    const [shoesByTag,setShoesByTag]=useState('');
    useEffect(()=>{
        shoes.results?.map((ShoesByTagContainer)=>{
            return(
                ShoesByTagContainer.name===tag&&
                    axios.get(`${ShoesByTagContainer.url}`)
                        .then(res=>{
                            setShoesByTag(res.data.results);
                        })
            );

        })
    },[shoes])
    if(shoesByTag!==''){
        shoe =shoesByTag.map((shoe)=>{
            return(
                <CardInfo 
                    key={shoe.pk}
                    image={shoe.image}
                    name={shoe.name}
                    category_slug={shoe.category_slug}
                    />
            );
        })
    }
    return(
        <div className="ShoesByTagContainer">
            {shoe}
        </div>
    );
}
export default ShoesByTagContainer