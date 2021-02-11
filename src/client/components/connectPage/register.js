import React from "react";

const Register = () => (
    <div className={"register-content is half column "}>
        <h1 className={"title has-text-grey"}>{"Register"}</h1>
        <h2 className={"subtitle has-text-grey"}>{"Create your account"}</h2>

        <div className={"field"}>
            <label className={"label has-text-grey"}>{"Name"}</label>
            <div className={"control"}>
                <input
                    className={"input has-text-grey is-medium is-rounded"}
                    type={"text"}
                    placeholder={"Enter your name"}
                />
            </div>
        </div>

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
            <label className={"label has-text-grey"}>{"Password"}</label>
            <div className={"control"}>
                <input
                    className={"input has-text-grey is-medium is-rounded"}
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
        <p className={"has-text-centered"}>
            <a className={"button is-medium is-primary is-rounded"}>
                {" Register "}
            </a>
        </p>
    </div>
);

export default Register;
