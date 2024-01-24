import { Logo ,Search} from "../../components/index";
import './NavBar.css'
import { IoIosCart ,IoIosList ,IoMdPerson,IoMdSearch,IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect,useRef } from "react";

function NavBar () {
    const ulRef=useRef();
    const showUl = () =>{
        ulRef.current.classList.toggle("responseveUl");
    }
    return (
        <div className="NavBar">
                <Logo/>
                <Search/>
                <div className="Links">
                    <Link className="searchIcon"><IoMdSearch/></Link>
                    <Link><IoIosCart /></Link>
                    <Link className="hamburgar" onClick={showUl}><IoIosList /></Link>
                    <Link className="userIcon"><IoMdPerson/></Link>
                </div>
                <div className="categories" ref={ulRef}>
                    <Link className="closeIcon"onClick={showUl}><IoIosCloseCircleOutline /></Link>
                    <Link className="userIcon"><IoMdPerson/></Link>
                    <Link>nike</Link>
                    <Link>adidas</Link>
                    <Link>air jordan</Link>
                    <Link>brand</Link>
                    <Link>nike</Link>

                </div>
        </div>
    );
}
export default NavBar