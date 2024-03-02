import { useEffect, useState ,createContext} from 'react';
import axios from 'axios';

const ShoesContext = createContext()
export default ShoesContext

export const ShoesProvider = ({children}) => {
    const [cardInformation,setCardInformation]=useState([]);
    const [AllShoes,setAllShoes] =useState([]);
    const [SelectedShoe,setSelectedShoe]=useState('');//cause we choose the shoe from different positions in landing page 
    const [SearchedResults,setSearchedResults]=useState('');//cause the search can done from all pages and display the result in shoes pages only
    const [BrandShoes,setBrandShoes]=useState('');// cause the brand are in drop down and the result of choosing one is in shoes page
    const [CategoryShoes,setCategoryShoes]=useState('')// cause the categories are in navbar and the result of choosing one is in shoes page
    const [neededQuantity,setneededQuantity] =useState('');//the needed quantity from shoe
    const [brands,setBrands] =useState('');//the brands nike,adidas 
    const [categories,setCategories]=useState('');//categories
    const [SelectedSizeID,setSelectedSizeID]=useState(null);//to send the size Id when adding to cart
    const [shoesInPageShoes,setShoesInPageShoes]=useState(''); //shoes page

//getting latest shoes and all shoes 
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/shoes/latest/")
            .then(res => {
                setCardInformation(res.data);
            });
        axios.get("http://127.0.0.1:8000/shoes/")
        .then(res => {
            setAllShoes(res.data);
        })    
        axios.get('http://localhost:8000/shoes/brands/')
        .then((res)=>{
            setBrands(res.data.results);
        })
        axios.get("http://localhost:8000/shoes/categories/")
        .then(res=>{
        setCategories(res.data.results);
        })

    },[])

    let contextDaTa = {
        cardInformation:cardInformation,
        setCardInformation:setCardInformation,
        AllShoes:AllShoes,
        setAllShoes:setAllShoes,
        SelectedShoe:SelectedShoe,
        setSelectedShoe:setSelectedShoe,
        SearchedResults:SearchedResults,
        setSearchedResults:setSearchedResults,
        BrandShoes:BrandShoes,
        setBrandShoes:setBrandShoes,
        CategoryShoes:CategoryShoes,
        setCategoryShoes:setCategoryShoes,
        neededQuantity:neededQuantity,
        setneededQuantity:setneededQuantity,
        brands:brands,
        categories:categories,
        SelectedSizeID:SelectedSizeID,
        setSelectedSizeID:setSelectedSizeID,
        shoesInPageShoes:shoesInPageShoes,
        setShoesInPageShoes:setShoesInPageShoes,
    }
    return(
        <ShoesContext.Provider value={contextDaTa}>
            {children}
        </ShoesContext.Provider>
    )
}