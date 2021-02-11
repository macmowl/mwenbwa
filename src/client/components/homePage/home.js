/* eslint-disable react/jsx-max-depth */
import React from "react";

import ReactLogo from "../../../client/assets/logo.png";

const Home = () => (
    <div className={"box"}>
        <div className={"hero-body"}>
            <div className={"container"}>
                <div className={"columns is-vcentered"}>
                    <div className={"column is-5 mx-6"}>
                        <img src={ReactLogo} alt={"React Logo"} />
                        <p className={"subtitle is-6 has-text-centered my-4"}>
                            {"A wonderful game of trees and leaves."}
                        </p>
                        <p className={"has-text-centered"}>
                            <a
                                className={
                                    "button is-medium is-primary is-rounded"
                                }>
                                {" Start "}
                            </a>
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
    </div>
);

export default Home;
