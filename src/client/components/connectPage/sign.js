import React from "react";
import Login from "./login";
import Register from "./register";
import Logosmall from "./logo_register-login";

const ConnectPage = () => (
    <div className={"container is-flex"}>
        <Login />
        <Register />
        <Logosmall />
    </div>
);

export default ConnectPage;
