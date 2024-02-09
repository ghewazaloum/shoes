import { Logo ,Search} from "../../components/index";
import './NavBar.css'
import { IoIosCart ,IoIosList ,IoMdPerson,IoMdSearch,IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import {  useContext,useRef, useState } from "react";
import { CategoriesContext, CategoryNameContext, FormDisplayContext } from "../../App";


function NavBar () {
    const {setCategoryName} = useContext(CategoryNameContext);
    const {FormDisplay,setFormDisplay} = useContext(FormDisplayContext);
    const ulRef=useRef();
    const searchRef=useRef();
    let category;

    let FormClassName;
    // if(document.querySelector("#FormContainer")){
    //     FormClassName=document.querySelector("#FormContainer").className;
    // }

    const [Flag,setFlag] =useState(null);
    const categories=useContext(CategoriesContext);
 
    const showUl = () =>{
        ulRef.current.classList.toggle("responseveUl");
    }
    const showSearchContainer = () =>{
        searchRef.current.classList.toggle("showOnAllScreen");
    }
    const ShowForm =(flag)=>{
            if(FormDisplay.className==="FormContainer"){
                FormDisplay.classList.add("FormContainer-display");
                 setFlag(flag);
            }else if(FormDisplay.className==="FormContainer FormContainer-display" && Flag===flag){
                FormDisplay.classList.remove("FormContainer-display");
                setFlag(null)
            }
    }

    if(categories!==''){
        category =categories.map((category)=>{
            return(
                <Link to='/shoes'onClick={()=>{setCategoryName(category.name);showUl()}} key={category.id}>{category.name}</Link>
            );
        })
    }
    return (
        <div className="NavBar">
                <Logo/>
                <Search innerRef={searchRef}/>
                <div className="Links">
                    <Link className="searchIcon"onClick={showSearchContainer}><IoMdSearch/></Link>
                    <Link  onClick={()=>{ShowForm("cartIcon")}}><IoIosCart /></Link>
                    <Link className="hamburgar" onClick={showUl}><IoIosList /></Link>
                    <Link onClick={()=>{ShowForm("userIcon")}} className="userIcon"><IoMdPerson/></Link>
                </div>
                <div className="categories" ref={ulRef}>
                    <Link className="closeIcon"onClick={showUl}><IoIosCloseCircleOutline /></Link>
                    <Link className="userIcon"onClick={()=>{ShowForm();showUl()}}><IoMdPerson/></Link>
                    {category}
                </div>
        </div>
    );
}
export default NavBar