import React from "react";
import { NavLink } from "react-router-dom";
import "./Calculators.style.css";
import ProgramSlot from "./ProgramSlot.jsx";
import FrequenceOfResonanceImage from "./img/frequenceOfResonance_400x240.jpg";

function Calculators() {
    return(
        <div className="calculators">
            <h1>CALCULATORS</h1>
            <div className="calculatorsBody">
                <div className="programSlotContainer">
                    <NavLink to="/calculators/frequence-of-resonance">
                        <ProgramSlot
                            title="Frequence of Resonance Calculator"
                            image={FrequenceOfResonanceImage}
                        />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Calculators;