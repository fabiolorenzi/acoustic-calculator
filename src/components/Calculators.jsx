import React from "react";
import { NavLink } from "react-router-dom";
import "./Calculators.style.css";
import ProgramSlot from "./ProgramSlot.jsx";

function Calculators() {
    return(
        <div className="calculators">
            <h1>CALCULATORS</h1>
            <div className="calculatorsBody">
                <NavLink to="/calculators/frequence-of-resonance">
                    <ProgramSlot
                        title="Frequence of Resonance Calculator"
                        image=""
                    />
                </NavLink>
            </div>
        </div>
    );
};

export default Calculators;