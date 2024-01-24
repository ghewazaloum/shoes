import './Home.css';
import {StaticImg,Heading} from '../../components/index'
import { CardContainer,ShoesByTagContainer,Footer} from '../../Sections/index';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Home () {
    const [cardInformation,setCardInformation]=useState([]);
    const [shoes,setShoes] =useState([]);
    
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/shoes/latest/")
            .then(res => {
                setCardInformation(res.data);
            });
        axios.get("http://127.0.0.1:8000/shoes/")
        .then(res => {
            setShoes(res.data);
        })    

    },[])
    return(
        <div className="Home">
            <StaticImg imgLink='https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' statement='the best is yet to come!'/>
            <Heading statement='our latest products'/>
            <CardContainer cardInformation={cardInformation}/>
            <StaticImg imgLink='https://images.unsplash.com/photo-1508147840258-7d4e11798d4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' statement='both casual and formal'/>
            <Heading statement='for men'/>
            <ShoesByTagContainer shoes={shoes} tag="men"/>
            <Heading statement='for women'/>
            <ShoesByTagContainer shoes={shoes} tag="women"/>
            <Heading statement='for kids'/>
            <ShoesByTagContainer shoes={shoes} tag="kids"/>
            <Footer/>
        </div>
    );
}
export default Home