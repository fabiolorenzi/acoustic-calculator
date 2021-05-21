import React from "react";
import "./ProgramSlot.style.css";

function ProgramSlot({title, image}) {
    return(
        <div className="singleSlot">
            <h1>{title}</h1>
            <img src={image} alt={title} />
        </div>
    );
};

export default ProgramSlot;