import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";

function App() {
    return(
        <div className="mainContainer">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    );
};

export default App;