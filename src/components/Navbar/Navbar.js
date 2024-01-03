import './Navbar.css'
function Navbar (){
    return(
        <nav className='nav'>
            <h1 className="logo">
               <span className='span1'>sneak</span>
               <span className='span2'>peak</span>
            </h1>
            <ul >
                <li><a>Home</a></li>
                <li><a>Skills</a></li>
                <li><a>education</a></li>
                <li><a>Work</a></li>
            </ul>
        </nav>
    );
}
export default Navbar