/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Home from "./components/homePage/home";
import ConnectPage from "./components/connectPage/sign";
import GameMap from "./components/gamePage/map";

const App = () => (
    <Router>
        <Link to={"/"}>{"Home"}</Link>
        <Link to={"/map"}>{"map"}</Link>
        <Link to={"/sign"}>{"Signin"}</Link>

        <Route exact path={"/"} component={Home} />
        <Route exact path={"/map"} component={GameMap} />
        <Route exact path={"/sign"} component={ConnectPage} />
    </Router>
);

ReactDOM.render(<App />, document.querySelector("#app"));
