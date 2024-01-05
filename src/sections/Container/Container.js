import './Container.css'

function Container(props){
    return(
        <div className='container'>
            {props.children}
        </div>
    );
}
function ShoesContainer(props){
    return(
        <div className='ShoesContainer'>
            {props.children}
        </div>
    );
}
export default Container
export {ShoesContainer}