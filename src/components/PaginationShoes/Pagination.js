import { useContext } from 'react';
import './Pagination.css'
import ShoesContext from '../../Context/ShoesContext';
import axios from 'axios';
import { GrFormPrevious ,GrFormNext} from "react-icons/gr";

function Pagination () {
    const {shoesInPageShoes,setShoesInPageShoes}=useContext(ShoesContext);

    const previous = () =>{
        if(shoesInPageShoes.previous){
            axios.get(`${shoesInPageShoes?.previous}`)
                .then(res => {
                    setShoesInPageShoes(res.data);
            })
        }
    }
    const next = () =>{
        if(shoesInPageShoes.next){
            axios.get(`${shoesInPageShoes?.next}`)
                .then(res => {
                    setShoesInPageShoes(res.data);
            })
        }
    }

    return(
        <nav>
            <ul className='Pagination'>
                {shoesInPageShoes.previous&&
                <li onClick={()=>{previous()}} className='Pagination-item'>
                    <a  href='#' className='Pagination-link'>
                        <GrFormPrevious/>
                    </a>
                </li>
                }
                {shoesInPageShoes.next&&
                <li onClick={()=>{next()}}  className='Pagination-item'>
                    <a  href='#' className='Pagination-link'>
                        <GrFormNext/>
                    </a>
                </li>}
            </ul>
        </nav>
    )
}
export default Pagination