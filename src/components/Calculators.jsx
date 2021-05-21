import React from "react";
import "./Calculators.style.css";
import ProgramSlot from "./ProgramSlot.jsx";

function Calculators() {
    return(
        <div className="calculators">
            <h1>CALCULATORS</h1>
            <div className="calculatorsBody">
                <ProgramSlot
                    title="Frequence of Resonance Calculator"
                    image=""
                />
            </div>
        </div>
    );
};

export default Calculators;