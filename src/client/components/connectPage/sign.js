import React from "react";
import Login from "./login";
import Register from "./register";
import Logosmall from "./logo_register-login";

const ConnectPage = () => (
    <div>
        <div className={"container"}>
            <Logosmall />
        </div>
        <div className={"container"}>
            <div className={"columns is-vcentered"}>
                <Login />
                <Register />
            </div>
        </div>
    </div>
);

export default ConnectPage;
