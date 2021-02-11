import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";

const Register = () => (
    <div className={"register-content border-left is-half column px-6 "}>
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
            <div className={"is-flex is-justify-content-center mr-2"}>
                <FontAwesomeIcon
                    className={"mr-3"}
                    icon={faCircle}
                    size={"2x"}
                    color={"#FF0000"}
                />{" "}
                <FontAwesomeIcon
                    className={"mr-3"}
                    icon={faCircle}
                    size={"2x"}
                    color={"#FF7E00"}
                />{" "}
                <FontAwesomeIcon
                    className={"mr-3"}
                    icon={faCircle}
                    size={"2x"}
                    color={"#FEB900"}
                />{" "}
                <FontAwesomeIcon
                    className={"mr-3"}
                    icon={faCircle}
                    size={"2x"}
                    color={"#73D709"}
                />{" "}
                <FontAwesomeIcon
                    className={"mr-3"}
                    icon={faCircle}
                    size={"2x"}
                    color={"#15CEDF"}
                />{" "}
                <FontAwesomeIcon
                    className={"mr-3"}
                    icon={faCircle}
                    size={"2x"}
                    color={"#0085FF"}
                />
            </div>
        </div>
        <p className={"has-text-centered mt-5"}>
            <a className={"button is-medium is-primary is-rounded"}>
                {" Register "}
            </a>
        </p>
    </div>
);

export default Register;
