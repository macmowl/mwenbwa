/* eslint-disable react/jsx-max-depth */
import React, {useContext} from "react";
import {useHistory, Redirect} from "react-router-dom";
import Logo from "./logo";
import {UserContext} from "../../hooks/user-context";

function Home() {
    const history = useHistory();
    const {user} = useContext(UserContext);

    if (user) {
        return <Redirect to={"/map"} />;
    }

    return (
        <div className={"box"} style={{height: "100vh"}}>
            <div className={"container"}>
                <div
                    className={"columns is-vcentered"}
                    style={{height: "100vh"}}>
                    <div className={"column has-text-centered is-5 mx-6"}>
                        <Logo />
                        <p className={"subtitle is-6 has-text-centered my-4"}>
                            {"A wonderful game of trees and leaves."}
                        </p>
                        <p className={"has-text-centered"}>
                            <button
                                type={"button"}
                                onClick={() => history.push("/sign")}
                                className={
                                    "button btn is-medium is-primary is-rounded"
                                }>
                                {" Start "}
                            </button>
                        </p>
                    </div>
                    <div className={"column is-5 mx-6"}>
                        <h2 className={"title is-4 has-text-weight-bold"}>
                            {"Rules of the game"}
                        </h2>
                        <p className={"my-4"}>
                            {
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum cursus tempor. Pellentesque ut massa sed magna placerat pellentesque non at ex. Ut a elit non velit faucibus sollicitudin. Nunc sem libero, cursus eu ex id, lacinia varius tortor. "
                            }
                        </p>
                        <p className={"my-4"}>
                            {
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum cursus tempor. Pellentesque ut massa sed magna placerat pellentesque non at ex. Ut a elit non velit faucibus sollicitudin. Nunc sem libero, cursus eu ex id, lacinia varius tortor. "
                            }
                        </p>
                        <h2 className={"title is-4 has-text-right"}>
                            {"Have fun!"}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
