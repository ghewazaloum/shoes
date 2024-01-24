import { CardInfo } from '../../components/index';
import './ShoesByTagContainer.css'
function ShoesByTagContainer ({shoes,tag}){
    const ShoesByTag =shoes.results?.map((ShoesByTagContainer)=>{
return(
        ShoesByTagContainer.name===tag&&
            ShoesByTagContainer.shoes?.map((shoe)=>{
                return(
                    <CardInfo 
                        key={shoe.pk}
                        image={shoe.image}
                        name={shoe.name}
                        category_slug={shoe.category_slug}
                     />
            )})
            
    )})
    return(
        <div className="ShoesByTagContainer">
          {ShoesByTag}
        </div>
    );
}
export default ShoesByTagContainer