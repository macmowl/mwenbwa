import React from "react";

const Login = () => (
    <div className={"login-content is-half column px-6 "}>
        <h1 className={"title has-text-grey"}>{"Login"}</h1>
        <h2 className={"subtitle has-text-grey"}>{"Log in to your account"}</h2>

        <div className={"field"}>
            <label className={"label has-text-grey"}>{"Email"}</label>
            <div className={"control"}>
                <input
                    className={"input has-text-grey is-medium is-rounded"}
                    type={"email"}
                    placeholder={"Enter your email adress"}
                />
            </div>
        </div>

        <div className={"field"}>
            <label className={"label has-text-grey has-text-grey"}>
                {"Password"}
            </label>
            <div className={"control"}>
                <input
                    className={"input has-text-grey is-medium is-rounded"}
                    type={"password"}
                    placeholder={"**********"}
                />
            </div>
        </div>
        <p className={"has-text-centered"}>
            <a className={"button is-medium is-primary is-rounded"}>
                {" Login "}
            </a>
        </p>
    </div>
);

export default Login;
