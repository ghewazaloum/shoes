import './CardContainer.css'
function CardContainer (props){
    return (
        <div className="CardContainer">
            {props.children}
        </div>
    );
}
export default CardContainer