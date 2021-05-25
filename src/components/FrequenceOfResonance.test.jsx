import React from "react";
import ReactDOM from "react-dom";
import FrequenceOfResonance, { calculateFrequences } from "./FrequenceOfResonance.jsx";

it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FrequenceOfResonance />, div);
});