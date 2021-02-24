import React from "react";
import IconLeave from "../gamePage/icons/leaves";
import IconTree from "../gamePage/icons/tree";

const TreeDetails = () => (
    <>
        <div className={"box m-3 has-text-centered"}>
            <IconTree />
            <p className={"has-text-weight-bold has-text-black"}>
                {"Honeylocust (Gleditsia)"}
            </p>

            <IconLeave />
            {"278"}
            <p className={"mt-1 has-text-centered"}>
                <a
                    className={
                        "button is-small is-info has-text-white is-rounded"
                    }>
                    {" Buy "}
                </a>
            </p>
            <div className={"is-inline-block has-text-centered"}>
                <table className={"is-inline-block my-4 is-size-7"}>
                    <thead>
                        <tr>
                            <th>{"Owner"}</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{"Suzy"}</td>
                        </tr>
                    </tbody>
                </table>

                <table className={"is-size-7"}>
                    <thead>
                        <tr>
                            <th>{"Previous owners"}</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{"Luke"}</td>
                        </tr>
                        <tr>
                            <td>{"Lorelai"}</td>
                        </tr>
                        <tr>
                            <td>{"Rory"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
);

export default TreeDetails;
