import './Heading.css'
function Heading({statement,money}){
    return(
        <h3 className='heading'>{statement} {money}</h3>
    );
}
export default Heading