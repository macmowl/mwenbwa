/* eslint-disable react/jsx-max-depth */
import React from "react";
import {useHistory} from "react-router-dom";
import sad from "../../../client/assets/sad.png";

function Error404() {
    const history = useHistory();
    return (
        <div className={"box"}>
            <div className={"hero-body"}>
                <div className={"container"}>
                    <div className={"columns is-vcentered"}>
                        <div className={"column has-text-centered is-5 mx-6"}>
                            <img src={sad} alt={"sad"} />
                        </div>
                        <div className={"column is-5 mx-6"}>
                            <h2 className={"title is-2 has-text-weight-bold"}>
                                {"Error 404"}
                            </h2>
                            <h3 className={"title is-3 has-text-weight-bold"}>
                                {"Page not found"}
                            </h3>
                            <p className={"my-4"}>
                                {
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum cursus tempor. Pellentesque ut massa sed magna placerat pellentesque non at ex. Ut a elit non velit faucibus sollicitudin. Nunc sem libero, cursus eu ex id, lacinia varius tortor. "
                                }
                            </p>
                            <p className={"has-text-centered"}>
                                <button
                                    type={"button"}
                                    onClick={() => history.push("/")}
                                    className={
                                        "button is-medium is-primary is-rounded"
                                    }>
                                    {" Return "}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error404;
