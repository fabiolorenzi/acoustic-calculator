import React from "react";
import Logo from "./img/logo_01.png";
import "./Contacts.style.css";

function Contacts() {
    return(
        <div className="contacts">
            <h1>CONTACTS</h1>
            <div className="contactsBody">
                <div id="logoSideContacts">
                    <img src={Logo} alt="logo" />
                </div>
                <div id="contactsText">
                    <p id="contactsTitle">To contact the developer:</p>
                    <p>by email</p>
                    <a
                        href="mailto:fabiolorenzi13975@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="contactsLink"
                    >
                        fabiolorenzi13975@gmail.com
                    </a>
                    <p>through Github</p>
                    <a
                        href="https://github.com/fabiolorenzi"
                        target="_blank"
                        rel="noreferrer"
                        className="contactsLink"
                    >
                        https://github.com/fabiolorenzi
                    </a>
                    <p>through Linkedin</p>
                    <a
                        href="https://www.linkedin.com/in/fabio-lorenzi-6901421b3/"
                        target="_blank"
                        rel="noreferrer"
                        className="contactsLink"
                    >
                        https://www.linkedin.com/in/fabio-lorenzi-6901421b3/
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;