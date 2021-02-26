import React, {useState} from "react";
import {CirclePicker} from "react-color";
import {COLORS_PICKER} from "../../core/constants.js";
import useAuth from "./../../hooks/api-user";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [color, setColor] = useState("");

    const handleColor = selectedColor => {
        setColor(selectedColor.hex);
    };
    const [nameErr, setNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});
    const [colorErr, setColorErr] = useState({});
    const [registerErr] = useState({});

    const formValidation = () => {
        const nameErr1 = {};
        const emailErr1 = {};
        const passwordErr1 = {};
        const colorErr1 = {};
        let isValid = true;

        if (name.trim().length < 3) {
            nameErr1.nameShort = "Your name is too short!";
            isValid = false;
        }
        if (name.trim().length > 10) {
            nameErr1.nameLong = "Your name is too long!";
            isValid = false;
        }
        if (email.length < 5) {
            emailErr1.emailShort = "Email should be at least 5 characters long";
            isValid = false;
        }
        if (email.split("").filter(x => x === "@").length !== 1) {
            emailErr1.emailCharact = "Email should contain a @";
            isValid = false;
        }
        if (!email.includes(".")) {
            emailErr1.emailDot = "Email should contain at least one dot";
            isValid = false;
        }

        if (password.length < 6) {
            passwordErr1.passwordShort =
                "Password should be at least 6 characters long";
            isValid = false;
        }
        if (color.length === 0) {
            colorErr1.colorChoice = "Color can't be empty";
            isValid = false;
        }
        setNameErr(nameErr1);
        setEmailErr(emailErr1);
        setPasswordErr(passwordErr1);
        setColorErr(colorErr1);
        return isValid;
    };

    const {createUser} = useAuth();

    const handleSubmit = async e => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            const user = {
                email,
                username: name,
                password,
                color,
            };
            console.log("user: ", user);
            await createUser(user);
        }
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
                            <p className={"help is-danger"} key={nameErr[key]}>
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
                            <p className={"help is-danger"} key={emailErr[key]}>
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
                        <p className={"help is-danger"} key={passwordErr[key]}>
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
                            <p className={"help is-danger"} key={colorErr[key]}>
                                {colorErr[key]}
                            </p>
                        ))}
                    </div>
                    <p className={"has-text-centered mt-5"}>
                        <button
                            type={"submit"}
                            className={
                                "button btn is-medium is-primary is-rounded"
                            }>
                            {" Register "}
                        </button>
                    </p>
                    {Object.keys(registerErr).map(key => (
                        <p
                            className={"has-text-centered help is-danger"}
                            key={registerErr[key]}>
                            {registerErr[key]}
                        </p>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default Register;
