import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.style.css";

function Header() {
    return(
        <div className="header">
            <NavLink to="/" exact className="menu1" activeClassName="activeMenu1">HOME</NavLink>
            <NavLink to="/tutorial" className="menu1" activeClassName="activeMenu1">TUTORIAL</NavLink>
            <NavLink to="/calculator" className="menu1" activeClassName="activeMenu1">CALCULATOR</NavLink>
            <NavLink to="/contacts" className="menu1" activeClassName="activeMenu1">CONTACTS</NavLink>
        </div>
    );
};

export default Header;