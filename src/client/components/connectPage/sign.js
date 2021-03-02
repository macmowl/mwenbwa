import React, {useContext} from "react";
import Login from "./login";
import Register from "./register";
import Logosmall from "./logo_register-login";
import {UserContext} from "../../hooks/user-context";
import {Redirect} from "react-router-dom";

const ConnectPage = () => {
    const {user} = useContext(UserContext);

    if (user) {
        return <Redirect to={"/map"} />;
    }

    return (
        <div style={{height: "100vh"}}>
            <div className={"container pt-3"}>
                <Logosmall />
            </div>
            <div className={"container"}>
                <div
                    className={"columns is-vcentered"}
                    style={{height: "100vh"}}>
                    <Login />
                    <Register />
                </div>
            </div>
        </div>
    );
};

export default ConnectPage;
