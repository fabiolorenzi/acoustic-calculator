import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <div className="header">
            <NavLink to="/" exact>HOME</NavLink>
            <NavLink to="/tutorial">TUTORIAL</NavLink>
            <NavLink to="/calculator">CALCULATOR</NavLink>
            <NavLink to="/contacts">CONTACTS</NavLink>
        </div>
    );
};

export default Header;