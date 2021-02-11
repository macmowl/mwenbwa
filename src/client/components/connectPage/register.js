import React from "react";

const Register = () => (
    <div className={"register-content is half column"}>
        <h1 className={"title"}>{"Register"}</h1>
        <h2 className={"subtitle"}>{"Create your account"}</h2>

        <div className={"field"}>
            <label className={"label"}>{"Name"}</label>
            <div className={"control"}>
                <input
                    className={"input is-medium is-rounded"}
                    type={"text"}
                    placeholder={"Enter your name"}
                />
            </div>
        </div>

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

        <div className={"register-icon"}>
            <h5 className={"subtitle is-5"}>{"Pick your color"}</h5>
            <span className={"red"}>
                <i className={"fas fa-lg-border-circle"} />
            </span>{" "}
            <span className={"orange"}>
                <i className={"fas fa-lg-border-circle"} />
            </span>{" "}
            <span className={"yellow"}>
                <i className={"fas fa-lg-border-circle"} />
            </span>{" "}
            <span className={"green"}>
                <i className={"fas fa-lg-border-circle"} />
            </span>{" "}
            <span className={"blue-light"}>
                <i className={"fas fa-lg-border-circle"} />
            </span>{" "}
            <span className={"blue-dark"}>
                <i className={"fas fa-lg-border-circle"} />
            </span>
        </div>
    </div>
);

export default Register;
