import React, { useContext, useState } from "react";
import Logo from '../../img/logo.png'
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [authActionText, setAuthActionText] = useState("Login")
    const {user} = useContext(UserContext);

    const onlineStatus = useOnlineStatus();
    return <div className="flex justify-between h-16 bg-white shadow-md items-center px-8">
        <div className="logo h-10 flex items-center">
            <img src={Logo} className='h-12' alt="logo" />
        </div>
        <div className="flex items-center gap-8">
            <p className='mr-4'>
                <NavLink to="/">Home</NavLink>
            </p>
            <p className='mr-4'>
                <NavLink to="/about">About</NavLink>
            </p>
            <p className='mr-4'>
                <NavLink to="/">Restaurant</NavLink>
            </p>
            <p className='mr-4'>
                <NavLink to="/contact">Contact</NavLink>
            </p>
            {
                authActionText == "Logout" ? <p>{user}</p>:null
            }
            <button type="button" className={`p-3 ${authActionText == "Login" ? "bg-green-500" : "bg-red-600"}  text-white`} onClick={() => {
                authActionText == "Login" ? setAuthActionText("Logout") : setAuthActionText("Login")
            }}>
                {authActionText}
            </button>
            <p>
                <span className={`block min-h-4 min-w-4 shadow-lg rounded-full ${onlineStatus ? "bg-green-400 shadow-green-300":"bg-red-400 shadow-red-300"}`}></span>
            </p>
        </div>
    </div>

}

export default Header;
