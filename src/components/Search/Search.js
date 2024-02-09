import { useEffect } from 'react';
import './Search.css'
import { Link } from 'react-router-dom';
function Search ({innerRef}){
    const showSearchContainer = () =>{
        innerRef.current.classList.toggle("showOnAllScreen");
    }
    return(
        <div className="search" ref={innerRef}>
            <input type='text' placeholder='search for shoes'/>
            <button onClick={showSearchContainer}>
                <Link>search</Link>
            </button>
        </div>
    );
}
export default Search