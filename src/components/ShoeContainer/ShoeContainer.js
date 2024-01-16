import './ShoeContainer.css'
import shoe from '../../Assests/Images/shoe.png'
function ShoeContainer (){
    return(
        <div className='ShoeContainer'>
            <svg viewBox='150 0 700 700'  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M420.5 1C437.5 68.5 357 124.5 185 205C104.498 273 655.5 47.5 655.5 96.5C655.5 122.02 -24.9996 378.5 38.5004 391.5C102 404.5 812.5 128 817 175C821.5 222 -5.99957 472 38.5004 510C83.0004 548 974 211.5 929.5 285.5C885 359.5 -76.5001 650.5 6.49996 680C89.5 709.5 1027.5 313 980.5 391.5C933.5 470 27.5002 737.5 119 765C210.5 792.5 915.192 520.456 929.5 561C944.499 603.5 375.5 762 297 841C286.5 881 842.5 743 829.5 798.5" />
            </svg>
            <img src={shoe}/>
        </div>
    );
}
export default ShoeContainer