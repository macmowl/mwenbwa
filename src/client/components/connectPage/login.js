import React, {useState} from "react";
import useAuth from "./../../hooks/api-user";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});
    const [loginErr] = useState({});

    const formValidation = () => {
        const emailErr1 = {};
        const passwordErr1 = {};
        let isValid = true;
        if (!email) {
            emailErr1.emailShort = "Email required";
            isValid = false;
        }

        if (!password) {
            passwordErr1.passwordRequired = "Password required";
            isValid = false;
        }
        setEmailErr(emailErr1);
        setPasswordErr(passwordErr1);
        return isValid;
    };
    const {loginUser} = useAuth();

    const handleSubmit = async e => {
        e.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            const user = {
                email,
                password,
            };

            await loginUser(user);
        }
    };
    return (
        <div className={"login-content is-half column px-6 minimum-height"}>
            <h1 className={"title is-1 has-text-grey"}>{"Login"}</h1>
            <h2 className={"subtitle has-text-grey"}>
                {"Log in to your account"}
            </h2>
            <form onSubmit={handleSubmit}>
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
                        {Object.keys(emailErr).map(key => (
                            <p className={"help is-danger"} key={emailErr[key]}>
                                {emailErr[key]}
                            </p>
                        ))}
                    </div>
                </div>

                <div className={"field"}>
                    <label className={"label has-text-grey has-text-grey"}>
                        {"Password"}
                    </label>
                    <div className={"control"}>
                        <input
                            className={
                                "input has-text-grey is-medium is-rounded"
                            }
                            type={"password"}
                            placeholder={"**********"}
                            name={"password"}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        {Object.keys(passwordErr).map(key => (
                            <p
                                className={"help is-danger"}
                                key={passwordErr[key]}>
                                {passwordErr[key]}
                            </p>
                        ))}
                    </div>
                </div>
                <p className={"has-text-centered mt-5"}>
                    <button
                        type={"submit"}
                        className={
                            "button btn is-medium is-primary is-rounded"
                        }>
                        {" Login "}
                    </button>
                </p>
                {Object.keys(loginErr).map(key => (
                    <p
                        className={"has-text-centered help is-danger"}
                        key={loginErr[key]}>
                        {loginErr[key]}
                    </p>
                ))}
            </form>
        </div>
    );
};

export default Login;
