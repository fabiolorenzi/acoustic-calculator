import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Contacts from "./components/Contacts.jsx";
import Calculators from "./components/Calculators.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return(
        <div className="mainContainer">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/calculators" component={Calculators} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;