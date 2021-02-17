import React, {useState} from "react";
import {CirclePicker} from "react-color";
import {COLORS_PICKER} from "../../core/constants.js";
import {createUser} from "./api-user";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [color, setColor] = useState("");

    const handleColor = selectedColor => {
        setColor(selectedColor.hex);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const user = {
            email,
            username: name,
            password,
            color,
        };
        createUser(user);
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
                            placeholder={"Enter your email adress"}
                            name={"email"}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
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
                    </div>
                    <p className={"has-text-centered mt-5"}>
                        <button
                            type={"submit"}
                            className={
                                "button is-medium is-primary is-rounded"
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
