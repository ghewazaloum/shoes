import { useContext } from 'react';
import './Profile.css'
import { FaUser  } from"react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import AuthContext from "../../Context/AuthContext";

function Profile ({innerRef}) {
    const {user} = useContext(AuthContext); 
   
    //profile
   const ShowProfile = () =>{
    innerRef.current.classList.toggle("Profile_show");
}
    return(
        <div ref={innerRef} className="Profile">
            <IoIosCloseCircleOutline className="closeProfile"onClick={ShowProfile}/>
            <div className='profileIconSection'>
                <FaUser />
            </div>
            {user&&
            <div className='profileInformation'>
                <p>username : {user.username}</p>
                <p>first name : {user.first_name}</p>
                <p>last name : {user.last_name}</p>
                <p>email : {user.email}</p>
            </div>}
        </div>
    );
}
export default Profile