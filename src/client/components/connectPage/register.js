import React, {useState} from "react";
import {CirclePicker} from "react-color";
import {COLORS_PICKER} from "../../core/constants.js";
//import {useHistory} from "react-router-dom";
import {createUser} from "./api-user";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [color, setColor] = useState("");

    const handleColor = selectedColor => {
        setColor(selectedColor.hex);
    };
    const [nameErr, setNameErr] = useState({}); //for error
    const [emailErr, setEmailErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});
    const [colorErr, setColorErr] = useState({});
    const formValidation = () => {
        const nameErr1 = {};
        const emailErr1 = {};
        const passwordErr1 = {};
        const colorErr1 = {};
        let isValid = true;

        if (name.trim().length < 5) {
            nameErr1.nameShort = "Your name is too short!";
            isValid = false;
        }
        if (name.trim().length > 15) {
            nameErr1.nameLong = "Your name is too long!";
            isValid = false;
        }
        if (email.length < 5) {
            emailErr1.emailShort = "Email should be at least 5 characters long";
        }
        if (email.split("").filter(x => x === "@").length !== 1) {
            emailErr1.emailCharact = "Email should contain a @";
        }
        if (!email.includes(".")) {
            emailErr1.emailDot = "Email should contain at least one dot";
        }

        if (password.length < 6) {
            passwordErr1.passwordShort =
                "Password should be at least 6 characters long";
        }
        if (color.length === 0) {
            colorErr1.colorChoice = "Color can't be empty";
        }
        setNameErr(nameErr1);
        setEmailErr(emailErr1);
        setPasswordErr(passwordErr1);
        setColorErr(colorErr1);
        return isValid;
    };

    const handleSubmit = e => {
        e.preventDefault();
        formValidation();
        const user = {
            email,
            username: name,
            password,
            color,
        };
        createUser(user);

        //history.push("/map");
        //const history = useHistory();
    };

    return (
        <div className={"border-left is-half column px-6"}>
            <div className={"register-content"}>
                <h1 className={"title is-1 has-text-grey"}>{"Register"}</h1>
                <h2 className={"subtitle has-text-grey"}>
                    {"Create your account"}
                </h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={"field"}>
                    <label className={"label has-text-grey"}>{"Name"}</label>
                    <div className={"control"}>
                        <input
                            className={
                                "input has-text-grey is-medium is-rounded"
                            }
                            type={"text"}
                            placeholder={"Enter your name"}
                            name={"name"}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        {Object.keys(nameErr).map(key => (
                            <p className={"help is-danger"} key={name.id}>
                                {nameErr[key]}
                            </p>
                        ))}
                    </div>
                </div>

                <div className={"field"}>
                    <label className={"label has-text-grey"}>{"Email"}</label>
                    <div className={"control"}>
                        <input
                            className={
                                "input has-text-grey is-medium is-rounded"
                            }
                            type={"email"}
                            placeholder={"Enter your email address"}
                            name={"email"}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        {Object.keys(emailErr).map(key => (
                            <p className={"help is-danger"} key={email.id}>
                                {emailErr[key]}
                            </p>
                        ))}
                    </div>
                </div>

                <label className={"label has-text-grey"}>{"Password"}</label>
                <div className={"control"}>
                    <input
                        className={"input has-text-grey is-medium is-rounded"}
                        type={"password"}
                        placeholder={"**********"}
                        name={"password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {Object.keys(passwordErr).map(key => (
                        <p className={"help is-danger"} key={password.id}>
                            {passwordErr[key]}
                        </p>
                    ))}
                </div>

                <div className={"register-icon mt-5"}>
                    <h5 className={"subtitle is-5"}>{"Pick your color"}</h5>
                    <div className={"field"}>
                        <div
                            className={
                                "is-flex is-justify-content-center mr-2"
                            }>
                            <CirclePicker
                                colors={COLORS_PICKER}
                                name={"color"}
                                color={color}
                                onChange={handleColor}
                            />
                        </div>
                        {Object.keys(colorErr).map(key => (
                            <p className={"help is-danger"} key={color.id}>
                                {colorErr[key]}
                            </p>
                        ))}
                    </div>
                    <p className={"has-text-centered mt-5"}>
                        <button
                            type={"submit"}
                            // onClick={() => history.push("/map")}
                            className={
                                "button btn is-medium is-primary is-rounded"
                            }>
                            {" Register "}
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;
