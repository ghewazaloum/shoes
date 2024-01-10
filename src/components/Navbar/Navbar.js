import {FaBars,FaTimes} from "react-icons/fa"
import './Navbar.css'
import { useEffect, useRef } from "react";
function Navbar (){
    const ulRef=useRef();
    const showUl = () =>{
        ulRef.current.classList.toggle("responseveUl");
    }
    return(
        <nav className='nav'>
            <h1 className="logo">
               <span className='span1'>sneak</span>
               <span className='span2'>peak</span>
            </h1>
            <ul className="Options" ref={ulRef}>
                <li onClick={showUl}><a>Home</a></li>
                <li onClick={showUl}><a>Skills</a></li>
                <li onClick={showUl}><a>education</a></li>
                <li onClick={showUl}><a>Work</a></li>
                <button className="btn closeButton" onClick={showUl}>
                        <FaTimes/>
                </button>
            </ul>
            <button className="btn" onClick={showUl}>
                <FaBars/>
            </button>
        </nav>
    );
}
export default Navbar