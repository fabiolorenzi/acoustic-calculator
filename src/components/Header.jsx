import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.style.css";
import BurgerMenu from "./BurgerMenu.jsx";
import HiddenMenu from "./HiddenMenu.jsx";

function Header() {
    const [open, setOpen] = useState(false);

    const openHiddenMenu = e => {
        e.preventDefault();
        setOpen(!open);
    };

    return(
        <div className="header">
            <div className="bigMenu">
                <NavLink to="/" exact className="menu1" activeClassName="activeMenu1">HOME</NavLink>
                <NavLink to="/tutorial" className="menu1" activeClassName="activeMenu1">TUTORIAL</NavLink>
                <NavLink to="/calculators" className="menu1" activeClassName="activeMenu1">CALCULATORS</NavLink>
                <NavLink to="/contacts" className="menu1" activeClassName="activeMenu1">CONTACTS</NavLink>
            </div>
            <button onClick={openHiddenMenu} className="burgerButton" id={open ? "burgerOpen" : "burgerClosed"}>
                <BurgerMenu />
            </button>
            <div id="hiddenMenuContainer" onClick={openHiddenMenu}><HiddenMenu open={open} /></div>
        </div>
    );
};

export default Header;