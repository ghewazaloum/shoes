import { useContext, useState } from 'react';
import './Search.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ShoesContext from '../../Context/ShoesContext';

function Search ({innerRef}){
    const {setSearchedResults}=useContext(ShoesContext);
    const [TextToSearch,setTextToSearch] =useState('');
    const navigate =useNavigate();
    const showSearchContainer = () =>{
        innerRef.current.classList.toggle("showOnAllScreen");
        axios.get(`http://localhost:8000/shoes/search/?search=${TextToSearch}`)
        .then(res=>{
            setSearchedResults(res.data);
        })
        navigate("/shoes");
        document.getElementById('input').value='';
    }
    const searchInput=(e)=>{
        setTextToSearch(e.target.value);
      }
    return(
        <div className="search" ref={innerRef}>
            <input id='input' onChange={searchInput} type='text' placeholder='search for shoes'/>
            <button onClick={showSearchContainer}>
                <Link>search</Link>
            </button>
        </div>
    );
}
export default Search