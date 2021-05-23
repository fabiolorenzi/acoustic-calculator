import React from "react";
import "./TutorialProgramSlot.style.css";

function TutorialProgramSlot({title, image}) {
    return(
        <div className="singleSlotTutorial">
            <h1>{title}</h1>
            <img src={image} alt={title} />
        </div>
    );
};

export default TutorialProgramSlot;