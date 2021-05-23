import React from "react";
import { NavLink } from "react-router-dom";
import "./Tutorials.style.css";
import TutorialProgramSlot from "./TutorialProgramSlot.jsx";

import FrequenceOfResonanceImage from "./img/frequenceOfResonance_400x240.jpg";

function Tutorials() {
    return(
        <div className="tutorials">
            <h1>TUTORIALS</h1>
            <div className="tutorialsBody">
                <div className="tutorialSlotContainer">
                    <NavLink to="/tutorials/frequence-of-resonance-tutorial">
                        <TutorialProgramSlot
                            title="Frequence of Resonance Calculator Tutorial"
                            image={FrequenceOfResonanceImage}
                        />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Tutorials;