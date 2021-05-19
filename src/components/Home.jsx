import React from "react";
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
                        Welcome to Acoustic Calculator! In this website you can find all the instruments to calculate everything 
                        related to the acoustic of you studio. Acoustics is a factor that all in the music business have to learn to 
                        accept and work to our own advantage. In the studio, knowledge might allow you to take advantage to get some 
                        particular sound you wish to highlight. In live sound, acoustics can be a problem without the knowledge of 
                        why they react as they do. Either way we all should know and learn something about the behave of the sound 
                        and on this website you will find all the instruments to find a good starting point for the best setup of 
                        your studio, like RT60 Calculator to First Reflections Finder. Enjoy your time on Acoustic Calculator.
                    </p>
                </div>
                <div id="homeImage">
                    <img src={Image01} alt="home studio example" />
                </div>
            </div>
        </div>
    );
};

export default Home;