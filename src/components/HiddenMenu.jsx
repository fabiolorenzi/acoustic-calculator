import React from "react";
import { NavLink } from "react-router-dom";
import "./HiddenMenu.style.css";

function HiddenMenu({open}) {
    return(
        <div className="hiddenMenu" id={open ? "hiddenMenuOpen" : "hiddenMenuClosed"}>
            <NavLink to="/" exact className="menu2" activeClassName="activeMenu2">HOME</NavLink>
            <NavLink to="/tutorials" className="menu2" activeClassName="activeMenu2">TUTORIALS</NavLink>
            <NavLink to="/calculators" className="menu2" activeClassName="activeMenu2">CALCULATORS</NavLink>
            <NavLink to="/contacts" className="menu2" activeClassName="activeMenu2">CONTACTS</NavLink>
        </div>
    );
};

export default HiddenMenu;