import React from "react";

const Login = () => (
    <div className={"login-content is-half column"}>
        <h1 className={"title"}>{"Login"}</h1>
        <h2 className={"subtitle"}>{"Log in to your account"}</h2>

        <div className={"field"}>
            <label className={"label"}>{"Email"}</label>
            <div className={"control"}>
                <input
                    className={"input is-medium is-rounded"}
                    type={"email"}
                    placeholder={"Enter your email adress"}
                />
            </div>
        </div>

        <div className={"field"}>
            <label className={"label"}>{"Password"}</label>
            <div className={"control"}>
                <input
                    className={"input is-medium is-rounded"}
                    type={"password"}
                    placeholder={"**********"}
                />
            </div>
        </div>
    </div>
);

export default Login;
