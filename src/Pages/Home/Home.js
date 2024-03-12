import './Home.css';
import {StaticImg,Heading} from '../../components/index'
import { CardContainer,ShoesByTagContainer} from '../../Sections/index';
import {useContext} from 'react'
import ShoesContext from '../../Context/ShoesContext';

function Home () {
    const {cardInformation,AllShoes,} = useContext(ShoesContext);//needed quan

    return(
        <div className="Home">
            <StaticImg imgLink='https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' statement='the best is yet to come!'/>
            <Heading statement='our latest products'/>
            <CardContainer cardInformation={cardInformation}/>
            <StaticImg imgLink='https://images.unsplash.com/photo-1508147840258-7d4e11798d4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' statement='both casual and formal'/>
            <Heading statement='for men'/>
            <ShoesByTagContainer shoes={AllShoes} tag="men"/>
            <StaticImg imgLink='https://images.unsplash.com/photo-1624763700615-570981e2ebc9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3' statement='for all of you'/>
            
            <Heading statement='for women'/>
            <ShoesByTagContainer shoes={AllShoes} tag="women"/>
            <Heading statement='for kids'/>
            <ShoesByTagContainer shoes={AllShoes} tag="kids"/>
        </div>
    );
}
export default Home