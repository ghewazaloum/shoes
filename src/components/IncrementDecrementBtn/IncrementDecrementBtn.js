import { useContext, useEffect, useRef, useState } from 'react';
import './IncrementDecrementBtn.css';
import { FiPlus ,FiMinus} from "react-icons/fi";
import ShoesContext from '../../Context/ShoesContext';

function IncrementDecrementBtn ({ minValue = 0, maxValue}){
    const [count, setCount] = useState(minValue);
    const prevMaxValue = usePrevious(maxValue);
    const {setneededQuantity} = useContext(ShoesContext);//needed quan
    //a function for take the previous value of a variable
    function usePrevious(value) {
      const ref = useRef();
      useEffect(() => {
        ref.current = value;
      },[value]);
      return ref.current;
    }
    useEffect(()=>{
        setneededQuantity(count)
        if ( prevMaxValue!==maxValue) {
          setCount(0);
      }
    },[count,setneededQuantity,maxValue,prevMaxValue])
    const handleIncrementCounter = () => {
        if (count < maxValue) {
          setCount((prevState) => prevState + 1);
        }
      };
    const handleDecrementCounter = () => {
    if (count > minValue) {
        setCount((prevState) => prevState - 1);
    }
    };  
    return(
        <div className="btn-group">
            <button className="increment-btn" onClick={handleIncrementCounter}>
            <FiPlus/>
            </button>
            <div>{count}</div>
            <button className="decrement-btn" onClick={handleDecrementCounter}>
            <FiMinus/>
            </button>
      </div>
    );
}
export default IncrementDecrementBtn