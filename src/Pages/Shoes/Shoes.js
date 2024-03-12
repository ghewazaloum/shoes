import { CardInfo ,Pagination} from '../../components/index';
import './Shoes.css'
import ShoesContext from '../../Context/ShoesContext';
import { useContext, useEffect } from 'react';

function Shoes (){
  const {SearchedResults,setSearchedResults,BrandShoes,setBrandShoes
    ,CategoryShoes,setCategoryShoes,setShoesInPageShoes,
    shoesInPageShoes}=useContext(ShoesContext);

  let shoe;//for mapping


    useEffect(()=>{     
        if(CategoryShoes!==''){
            console.log(CategoryShoes);
            setShoesInPageShoes(CategoryShoes);
        }
        if(SearchedResults!==''){
            console.log(SearchedResults);
            setShoesInPageShoes(SearchedResults);
        }
        if(BrandShoes!==''){
            console.log(BrandShoes);
            setShoesInPageShoes(BrandShoes);
        }
        setCategoryShoes('');
        setSearchedResults('');
        setBrandShoes('');
    },[CategoryShoes,SearchedResults,BrandShoes,setCategoryShoes,setBrandShoes,setSearchedResults])

    //mapping shoes
    if(shoesInPageShoes!==''){
        shoe =shoesInPageShoes?.results?.map((shoe)=>{
            return(
                <CardInfo
                    key={shoe.pk}
                    url={shoe.url}
                    image={shoe.image}
                    name={shoe.name}
                    category_slug={shoe.category_slug}
                    />
            );
        })
    }

    return(
        <div className='shoesPage'>
            <div className="Shoes">
                {shoe}
            </div>
            {shoe&&
            <Pagination />}
        </div>
    );
}
export default Shoes