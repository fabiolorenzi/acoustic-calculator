import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Tutorials from "./components/Tutorials.jsx";
import Calculators from "./components/Calculators.jsx";
import FrequenceOfResonance from "./components/FrequenceOfResonance.jsx"
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return(
        <div className="mainContainer">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/tutorials" component={Tutorials} />
                <Route exact path="/calculators" component={Calculators} />
                <Route path="/calculators/frequence-of-resonance" component={FrequenceOfResonance} />
                <Route path="/contacts" component={Contacts} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;