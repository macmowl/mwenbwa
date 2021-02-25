/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import React, {useState, useEffect} from "react";
import API from "./utils/api";
import ReactDOM from "react-dom";
import "./style.scss";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bulma";
// import useFindUser from './hooks/useFindUser';
import {UserContext} from "./hooks/user-context";
import PrivateRoute from "./components/private-route";
import "regenerator-runtime";
import Home from "./components/homePage/home";
import ConnectPage from "./components/connectPage/sign";
import GameMap from "./components/gamePage/map";
import Error404 from "./components/homePage/error404";

const App = () => {
    // const { user, setUser } = useFindUser();
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function findUser() {
            await API.get("/user")
                .then(res => {
                    setUser(res.data.currentUser);
                })
                .catch(err => console.log(err));
        }
        findUser();
    }, []);

    return (
        <Router>
            <UserContext.Provider value={{user, setUser}}>
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <PrivateRoute exact path={"/map"} component={GameMap} />
                    <Route exact path={"/sign"} component={ConnectPage} />
                    <Route path={"/"} component={Error404} />
                </Switch>
                {console.log(user)}
            </UserContext.Provider>
        </Router>
    );
};

ReactDOM.render(<App />, document.querySelector("#app"));
