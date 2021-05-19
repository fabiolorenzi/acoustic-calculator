import React from "react";
import { NavLink } from "react-router-dom";
import "./HiddenMenu.style.css";

function HiddenMenu({open}) {
    return(
        <div className="hiddenMenu" id={open ? "hiddenMenuOpen" : "hiddenMenuClosed"}>
            <NavLink to="/" exact className="menu2" activeClassName="activeMenu2">HOME</NavLink>
            <NavLink to="/tutorial" className="menu2" activeClassName="activeMenu2">TUTORIAL</NavLink>
            <NavLink to="/calculator" className="menu2" activeClassName="activeMenu2">CALCULATOR</NavLink>
            <NavLink to="/contacts" className="menu2" activeClassName="activeMenu2">CONTACTS</NavLink>
        </div>
    );
};

export default HiddenMenu;