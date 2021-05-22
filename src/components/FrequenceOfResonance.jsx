import React, { useEffect, useState } from "react";
import "./FrequenceOfResonance.style.css";

function FrequenceOfResponse() {

    //--------------------STATES--------------------
    
    const [dimensions, setDimensions] = useState({
        length: 0,
        depth: 0,
        height: 0
    });

    const [meter, setMeter] = useState("meter");

    const [result, setResult] = useState({
        length: [],
        depth: [],
        height: []
    });

    const meterToInches = 39.3701;

    const soundSpeedInM = 340;

    const soundSpeedInInches = 340 * meterToInches;

    useEffect(() => {
        let temp = [dimensions.length, dimensions.depth, dimensions.height];
        if (meter === "meter") {
            setDimensions({
                length: parseFloat(temp[0] / meterToInches).toFixed(1),
                depth: parseFloat(temp[1] / meterToInches).toFixed(1),
                height: parseFloat(temp[2] / meterToInches).toFixed(1)
            });
        } else {
            setDimensions({
                length: parseFloat(temp[0] * meterToInches).toFixed(1),
                depth: parseFloat(temp[1] * meterToInches).toFixed(1),
                height: parseFloat(temp[2] * meterToInches).toFixed(1)
            });
        };
        // eslint-disable-next-line
    }, [meter]);

    //--------------------FUNCTIONS--------------------

    const handleChange = e => {
        e.preventDefault();
        setDimensions({...dimensions, [e.target.name]: e.target.value});
    };

    const handleChangeMetering = e => {
        e.preventDefault();
        setMeter(e.target.value);
    };

    const calculateFrequences = e => {
        e.preventDefault();
        if (meter === "meter") {
            let freq = parseFloat((soundSpeedInM / dimensions.length) / 2);
            while (freq <= 25000) {
                result.length.push(freq.toFixed(2));
                freq *= 2;
            };
            freq = parseFloat((soundSpeedInM / dimensions.depth) / 2);
            parseInt(freq);
            while (freq <= 25000) {
                result.depth.push(freq.toFixed(2));
                freq *= 2;
            };
            freq = parseFloat((soundSpeedInM / dimensions.height) / 2);
            parseInt(freq);
            while (freq <= 25000) {
                result.height.push(freq.toFixed(2));
                freq *= 2;
            };
        } else {
            let freq = parseFloat((soundSpeedInInches / dimensions.length) / 2);
            while (freq <= 25000) {
                result.length.push(freq.toFixed(2));
                freq *= 2;
            };
            freq = parseFloat((soundSpeedInInches / dimensions.depth) / 2);
            while (freq <= 25000) {
                result.depth.push(freq.toFixed(2));
                freq *= 2;
            };
            freq = parseFloat((soundSpeedInInches / dimensions.height) / 2);
            while (freq <= 25000) {
                result.height.push(freq.toFixed(2));
                freq *= 2;
            };
        };
        console.log(result);
        setDimensions({
            length: 0,
            depth: 0,
            height: 0
        });
    };

    const resetData = e => {
        e.preventDefault();
        setDimensions({
            length: 0,
            depth: 0,
            height: 0
        });
        setResult({
            length: [],
            depth: [],
            heigth: []
        });
    };

    //--------------------RETURN--------------------

    return(
        <div className="frequenceOfResonance">
            <h1>FREQUENCE OF RESONANCE CALCULATOR</h1>
            <div className="frequenceOfResonanceBody">
                <form onSubmit={calculateFrequences}>
                    <div className="frequenceOfResonanceMeterSel">
                        <label htmlFor="meter">Unit</label>
                        <select onChange={handleChangeMetering}>
                            <option defaultValue value="meter">Meter</option>
                            <option value="inches">Inches</option>
                        </select>
                    </div>
                    <div className="frequenceOfResonanceLengthSel">
                        <label htmlFor="length">Length in {meter === "meter" ? "m" : "inch"}</label>
                        <input type="number" name="length" step={0.1} min={0} value={dimensions.length} onChange={handleChange} />
                    </div>
                    <div className="frequenceOfResonanceDepthSel">
                        <label htmlFor="depth">Depth in {meter === "meter" ? "m" : "inch"}</label>
                        <input type="number" name="depth" step={0.1} min={0} value={dimensions.depth} onChange={handleChange} />
                    </div>
                    <div className="frequenceOfResonanceHeightSel">
                        <label htmlFor="height">Height in {meter === "meter" ? "m" : "inch"}</label>
                        <input type="number" name="height" step={0.1} min={0} value={dimensions.height} onChange={handleChange} />
                    </div>
                    <div className="frequenceOfResonanceButtons">
                        <button type="submit">Calculate</button>
                        <button onClick={resetData}>Reset</button>
                    </div>
                </form>
                {result.length.length > 0 ?
                    <div className="frequenceOfResonanceResult">
                        <h1>Result</h1>
                        <div className="frequenceOfResonanceResultLength">
                            <h2>Resonances on the length</h2>
                            {result.length.map(resonance => {
                                return(
                                    <div className="forrSingleResult">
                                        <p>{resonance} hz</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="frequenceOfResonanceResultDepth">
                            <h2>Resonances on the depth</h2>
                            {result.depth.map(resonance => {
                                return(
                                    <div className="forrSingleResult">
                                        <p>{resonance} hz</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="frequenceOfResonanceResultHeight">
                            <h2>Resonances on the height</h2>
                            {result.height.map(resonance => {
                                return(
                                    <div className="forrSingleResult">
                                        <p>{resonance} hz</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    : <div className="frequenceOfResonanceResult"></div>
                }
            </div>
        </div>
    );
};

export default FrequenceOfResponse;