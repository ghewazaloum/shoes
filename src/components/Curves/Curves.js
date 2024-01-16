import './Curves.css'
function Curves (){
    return (
        <svg className='curve' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 129">
            <path fillOpacity="1" d="M0,128L60,112C120,96,240,64,360,64C480,64,600,96,720,90.7C840,85,960,43,1080,32C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
    );
}
function FooterCurves (){
    return (

            <svg className='curve' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
                <path fill="#0099ff" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,202.7C480,213,600,203,720,197.3C840,192,960,192,1080,197.3C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
            </svg>
    );
}

export default Curves
export {FooterCurves}