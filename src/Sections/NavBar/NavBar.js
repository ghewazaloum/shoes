import { Logo ,Search} from "../../components/index";
import './NavBar.css'
import { IoIosCart ,IoIosList ,IoMdPerson,IoMdSearch,IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import {  useContext,useRef } from "react";
import FormDisplayContext from "../../Context/FormDisplayContext";
import { IoMdArrowDropdown,IoIosLogOut  } from "react-icons/io";
import axios from "axios";
import { Profile } from "..";
import AuthContext from "../../Context/AuthContext";
import ShoesContext from '../../Context/ShoesContext';



function NavBar () {
    const {ShowForm} = useContext(FormDisplayContext);//to control open and close the form from different icons
    const {setBrandShoes,setCategoryShoes,categories,brands}=useContext(ShoesContext);//the Brand Shoes and the category Shoes
    const {isLoggedIn,Logout,UserInfoGet} = useContext(AuthContext); 
    const ulRef=useRef();//to change css
    const searchRef=useRef();//to change css
    const brandsRef=useRef();//to change css
    const ProfileRef=useRef();//to change css
    let category;//used in map() to display names of categories
    let brand,brand_sidebar;//used in map() to display names of brands


    //getting the brand (nike or other brand) shoes
    const GettingBrandShoes = (url)=>{
        axios.get(`${url}`)
        .then(res=>{
            setBrandShoes(res.data);
        })
        showUl();
    }
    //getting the category (run or forces ) shoes
    const GettingCategoryShoes = (url)=>{
    axios.get(`${url}`)
    .then(res=>{
        setCategoryShoes(res.data);
    })
    showUl();
    }
    //to change css functions
    const showUl = () =>{
        ulRef.current.classList.toggle("responseveUl");
    }
    const showBrandUl = () =>{
        brandsRef.current.classList.toggle("responseveBrandUl");
    }
    const showSearchContainer = () =>{
        searchRef.current.classList.toggle("showOnAllScreen");
    }
    //mapping categories
    if(categories!==''){
        category =categories.map((category)=>{
            return(
                <Link to='/shoes' className='category'onClick={()=>{GettingCategoryShoes(category.url)}} key={category.id}>{category.name}</Link>
            );
        })
    }
    //mapping brands
    if(brands!==''){
        brand =brands.map((brand)=>{
            return(
                <li key={brand.name} onClick={()=>{GettingBrandShoes(brand.url)}}>
                    <Link to='/shoes' className="brand" onClick={()=>{showBrandUl()}}>{brand.name}</Link>
                </li>
            );
        })
    }
    //mapping brands for side bar
    if(brands!==''){
        brand_sidebar =brands.map((brand)=>{
            return(
                <Link key={brand.name} to='/shoes' className="brands_Name" onClick={()=>{GettingBrandShoes(brand.url)}}>{brand.name}</Link>
            );
        })
    }
    //ppofile
    const ShowProfile = () =>{
        if(isLoggedIn===true){
            ProfileRef.current.classList.toggle("Profile_show");
            UserInfoGet()
        }
    }
    return (
        <div className="NavBar">
                <Logo/>
                <Profile innerRef={ProfileRef}/>
                <Search innerRef={searchRef}/>
                {/* links are in the large sizes */}
                <div className="Links">
                    <Link className="searchIcon"onClick={showSearchContainer}><IoMdSearch/></Link>
                    {isLoggedIn?
                    <>
                    <Link to='/Cart'><IoIosCart /></Link>
                    <Link onClick={()=>{ShowProfile()}} className="userIcon"><IoMdPerson/></Link>
                    <Link to='/'className="Logout" onClick={()=>{Logout()}}><IoIosLogOut /></Link>
                    </>
                    :
                    <>
                    <Link  onClick={()=>{ShowForm("cartIcon")}}><IoIosCart /></Link>
                    <Link onClick={()=>{ShowForm("userIcon")}} className="userIcon"><IoMdPerson/></Link>
                    </>
                    }
                    <Link className="hamburgar" onClick={showUl}><IoIosList /></Link>
                    
                    
                </div>
                {/* categories are to both sizes but links within are to small sizes */}
                <div className="categories" ref={ulRef}>
                    <Link className="closeIcon"onClick={showUl}><IoIosCloseCircleOutline /></Link>
                    {isLoggedIn?
                    <Link className="userIcon"onClick={()=>{showUl();ShowProfile()}}><IoMdPerson/></Link>
                    :
                    <Link className="userIcon"onClick={()=>{showUl();ShowForm()}}><IoMdPerson/></Link>
                    }
                    
                    <p className='sidebar_heading'>categories</p>
                    {category}
                    <p className='sidebar_heading'>brands</p>
                    {brand_sidebar}
                    {/* the drop down brand */}
                    <div className="divCategories">
                        <Link className="category" onClick={()=>{showBrandUl()}} >brands<IoMdArrowDropdown/></Link>
                        <ul ref={brandsRef} className="brands">
                            {brand}
                        </ul>
                    </div>
                    {/*the loggout button in the side list */}
                    {isLoggedIn?
                    <button onClick={()=>{showUl();Logout();}} className='logout_sidebar'>
                        logout
                    </button>
                     :null} 
                </div>
        </div>
        
    );
}
export default NavBar