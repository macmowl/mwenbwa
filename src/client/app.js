/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";
import MediaQuery from "react-responsive";
import "./style.scss";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bulma";

import Home from "./components/homePage/home";
import ConnectPage from "./components/connectPage/sign";
import GameMap from "./components/gamePage/map";

const App = () => (
    <Router>
        <MediaQuery minDeviceWidth={1008}>
            <div className={"navbar mobileNav content is-medium ml-6"}>
                <Link className={"navbar-item"} to={"/"}>
                    {"Home"}
                </Link>
                <Link className={"navbar-item"} to={"/map"}>
                    {"map"}
                </Link>
                <Link className={"navbar-item"} to={"/sign"}>
                    {"Signin"}
                </Link>
            </div>
        </MediaQuery>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/map"} component={GameMap} />
        <Route exact path={"/sign"} component={ConnectPage} />
    </Router>
);

ReactDOM.render(<App />, document.querySelector("#app"));
