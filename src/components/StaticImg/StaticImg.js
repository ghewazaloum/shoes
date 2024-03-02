import './StaticImg.css'
function StaticImg ({imgLink,statement}){
    return(
        <div className='firstImg'>
            <img src={imgLink}/>
            <h1>{statement}</h1>
        </div>
    );
}
export default StaticImg