import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

  const [login_logout_button,setlogin_logout_button]=useState("login");


    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="logo image is here"
          />
        </div>
  
        <div className="navItems">
          <ul>
            <li><Link to="/">home</Link></li>
            <li> <Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li>cart</li>
            <button onClick={()=>{(login_logout_button==="login")?setlogin_logout_button("logout"):
            (setlogin_logout_button("login"))}} className="toggle_button">{login_logout_button}</button>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;