import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.style.css";

import Logo from "./img/logo_01.png";
import Image01 from "./img/image_01.jpg";

function Home() {
    return(
        <div className="home">
            <h1>HOME</h1>
            <div className="homeBody">
                <div id="logoSide">
                    <img src={Logo} alt="logo" />
                </div>
                <div id="homeText">
                    <p>
                        Welcome to Acoustic Calculator!<br />In this website you can find all the instruments to calculate everything 
                        related to the acoustic of you studio. Acoustics is a factor that all in the music business have to learn to 
                        accept and work to our own advantage. In the studio, knowledge might allow you to take advantage to get some 
                        particular sound you wish to highlight. In live sound, acoustics can be a problem without the knowledge of 
                        why they react as they do. Either way we all should know and learn something about the behave of the sound 
                        and on this website you will find all the instruments to find a good starting point for the best setup of 
                        your studio, from RT60 Calculator to First Reflections Finder.<br />
                        Enjoy your time on Acoustic Calculator!
                    </p>
                </div>
                <div className="homeLinks">
                    <h2>WEBSITE MAP</h2>
                    <div>
                        <NavLink to="/">HOME</NavLink>
                        <p>to return in the home page</p>
                    </div>
                    <div>
                        <NavLink to="/tutorials">TUTORIALS</NavLink>
                        <p>here you can find how to use all the calculators and other interesting information</p>
                    </div>
                    <div>
                        <NavLink to="/calculators">CALCULATORS</NavLink>
                        <p>here you find our software to find all the data you need</p>
                    </div>
                    <div>
                        <NavLink to="/contacts">CONTACTS</NavLink>
                        <p>to find the link to contact the developer</p>
                    </div>
                </div>
                <div id="homeImage">
                    <img src={Image01} alt="home studio example" />
                </div>
            </div>
        </div>
    );
};

export default Home;