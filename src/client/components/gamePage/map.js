import React ,{ useRef } from "react";
import MediaQuery from "react-responsive";
import Profile from "./profile";
import TreeDetails from "./tree-details";
import LeafletMap from "./leaflet-map";

import {
    faClock,
    faSignOutAlt,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const GameMap = () => 
{
    const treeDetails = useRef();

    const handleOnSelectedTreeChanged = treeId => 
    {
        treeDetails.current.DisplayTreeInfo(treeId);
    }
    return (
        <>
            <MediaQuery minDeviceWidth={1008}>
                <div className={"columns is-gapless is-multiline is-mobile"}>
                    <div className={"column"}>
                        <LeafletMap onSelectedTreeChanged ={handleOnSelectedTreeChanged}/>
                    </div>

                    <div
                        className={
                            "column is-two-fifth-tablet is-one-fifth-desktop is-one-fifth-widescreen"
                        }>
                        <div className={"Sidebar"}>
                            <div className={"level-right mx-5 my-5"}>
                                <svg
                                    width={48.244}
                                    height={17.817}
                                    viewBox={"0 0 48.244 17.817"}>
                                    <defs>
                                        <style>
                                            {
                                                ".a{opacity:0.188;}.b{fill:#1d1d1b;stroke:#000;}.c{fill:#8bb174;mix-blend-mode:multiply;isolation:isolate;}"
                                            }
                                        </style>
                                    </defs>
                                    <g
                                        className={"a"}
                                        transform={"translate(0 0.547)"}>
                                        <g transform={"translate(17.891 3.22)"}>
                                            <path
                                                className={"b"}
                                                d={
                                                    "M272.64,351.38h.921v11.33a1.142,1.142,0,0,0,.3.83,1.09,1.09,0,0,0,.822.307,3.006,3.006,0,0,0,.479-.045,2.527,2.527,0,0,0,.514-.135l.181.722a3.71,3.71,0,0,1-.759.208,4.48,4.48,0,0,1-.771.081,1.647,1.647,0,0,1-1.219-.46,1.671,1.671,0,0,1-.461-1.238Z"
                                                }
                                                transform={
                                                    "translate(-272.64 -351.203)"
                                                }
                                            />
                                            <path
                                                className={"b"}
                                                d={
                                                    "M308.073,389.381a4.37,4.37,0,0,1-1.843-.386,4.54,4.54,0,0,1-1.473-1.065,5,5,0,0,1-.975-1.561,5.074,5.074,0,0,1-.353-1.9,4.987,4.987,0,0,1,1.32-3.407,4.485,4.485,0,0,1,1.452-1.045,4.509,4.509,0,0,1,5.122,1.056,4.805,4.805,0,0,1,.957,1.536,5.044,5.044,0,0,1,.346,1.853v.233a.5.5,0,0,1-.018.171H304.37a4.169,4.169,0,0,0,.379,1.5,4.28,4.28,0,0,0,.822,1.2,3.671,3.671,0,0,0,1.148.8,3.383,3.383,0,0,0,1.39.289,3.462,3.462,0,0,0,.959-.135,3.964,3.964,0,0,0,.876-.371,3.146,3.146,0,0,0,.722-.569,2.67,2.67,0,0,0,.5-.731l.794.217a2.985,2.985,0,0,1-.587.93,3.933,3.933,0,0,1-.9.731,4.59,4.59,0,0,1-1.128.479A4.688,4.688,0,0,1,308.073,389.381Zm3.687-5.24a4.27,4.27,0,0,0-.371-1.519,4.075,4.075,0,0,0-.812-1.184,3.666,3.666,0,0,0-1.148-.771,3.6,3.6,0,0,0-2.783,0,3.667,3.667,0,0,0-1.148.771,3.747,3.747,0,0,0-.794,1.194,4.591,4.591,0,0,0-.353,1.509Z"
                                                }
                                                transform={
                                                    "translate(-299.472 -375.831)"
                                                }
                                            />
                                            <path
                                                className={"b"}
                                                d={
                                                    "M387.518,389.389a3.223,3.223,0,0,1-2.195-.84,2.727,2.727,0,0,1-.661-.921,2.837,2.837,0,0,1-.234-1.148,2.216,2.216,0,0,1,.289-1.121,2.776,2.776,0,0,1,.8-.876,4.017,4.017,0,0,1,1.239-.578,5.726,5.726,0,0,1,1.59-.208,8.678,8.678,0,0,1,1.527.136,7.5,7.5,0,0,1,1.383.37v-.921a2.929,2.929,0,0,0-.759-2.124,2.721,2.721,0,0,0-2.056-.785,4.138,4.138,0,0,0-1.455.289,7.406,7.406,0,0,0-1.566.833l-.343-.614a6.162,6.162,0,0,1,3.434-1.23,3.6,3.6,0,0,1,2.674.986,3.69,3.69,0,0,1,.975,2.719v4.59q0,.451.4.451v.808a1.8,1.8,0,0,1-.189.027c-.067.006-.129.009-.172.009a.734.734,0,0,1-.578-.244,1.028,1.028,0,0,1-.257-.587v-.771a4.219,4.219,0,0,1-1.662,1.3A5.309,5.309,0,0,1,387.518,389.389Zm.181-.723a4.606,4.606,0,0,0,1.928-.4,3.283,3.283,0,0,0,1.347-1.049,1.211,1.211,0,0,0,.289-.722v-1.663a7.248,7.248,0,0,0-1.363-.379,8.218,8.218,0,0,0-1.464-.128,4.975,4.975,0,0,0-1.285.154,3.43,3.43,0,0,0-.993.424,1.966,1.966,0,0,0-.643.661,1.671,1.671,0,0,0-.225.857,2.184,2.184,0,0,0,.18.885,2.085,2.085,0,0,0,.506.714,2.406,2.406,0,0,0,.771.469A2.571,2.571,0,0,0,387.7,388.666Z"
                                                }
                                                transform={
                                                    "translate(-370.063 -375.84)"
                                                }
                                            />
                                            <path
                                                className={"b"}
                                                d={
                                                    "M459.708,363.365v-8.652H458.39v-.74h1.318v-.307a4.5,4.5,0,0,1,.705-2.7,2.291,2.291,0,0,1,1.952-.966,3.419,3.419,0,0,1,1.047.163,2.475,2.475,0,0,1,.831.433l-.325.652a2.1,2.1,0,0,0-.623-.325,2.356,2.356,0,0,0-.771-.128,1.613,1.613,0,0,0-1.414.732,3.767,3.767,0,0,0-.5,2.123v.325h2.673v.74h-2.676v8.65Z"
                                                }
                                                transform={
                                                    "translate(-434.52 -350)"
                                                }
                                            />
                                        </g>
                                        <path
                                            className={"b"}
                                            d={
                                                "M171.847,45.208a3.546,3.546,0,1,0-7.073-.366c0,.11.005.221.016.333a3.546,3.546,0,1,0,3.276,6.207v6.371h-1.718a.157.157,0,1,0,0,.313H170.2a.157.157,0,0,0,0-.313h-1.709V51.382a3.546,3.546,0,1,0,3.36-6.177Zm-1.276,6.433a3.11,3.11,0,0,1-2.084-.8V49.259l.96-1.2a.21.21,0,1,0-.33-.261l-.63.79v-1.7a.211.211,0,1,0-.421,0v2.689l-1.371-1.466a.211.211,0,1,0-.308.288l1.677,1.8v.645a3.124,3.124,0,1,1-2.986-5.318l.174-.052-.026-.179a3.2,3.2,0,0,1-.032-.449,3.124,3.124,0,1,1,6.249,0,3.184,3.184,0,0,1-.036.474l-.027.176.169.056a3.124,3.124,0,0,1-.98,6.091Z"
                                            }
                                            transform={
                                                "translate(-160.671 -41.297)"
                                            }
                                        />
                                        <circle
                                            className={"c"}
                                            cx={4.395}
                                            cy={4.395}
                                            r={4.395}
                                            transform={"translate(0 3.472)"}
                                        />
                                    </g>
                                </svg>
                            </div>
                            <Profile />
                            <TreeDetails ref={treeDetails}/>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={768}>
                <div className={"mb-0 p-3 level is-mobile"}>
                    <div className={"level-left"}>
                        <div className={"level-item"}>
                            <h4 className={"is-size-6 has-text-weight-bold"}>
                                {"Username"}
                                <span className={"ml-1"}>
                                    <svg height={10} width={10}>
                                        <circle
                                            cx={"5"}
                                            cy={"5"}
                                            r={"3"}
                                            stroke={"black"}
                                            fill={"orange"}
                                        />
                                    </svg>
                                </span>
                            </h4>
                        </div>
                    </div>

                    <div className={"level-right"}>
                        <p className={"mr-2"}>
                            <span
                                className={
                                    "button is-small is-primary has-text-weight-bold mr-2"
                                }>
                                {"10"}
                            </span>
                            {"trees"}
                        </p>
                        <p className={"mr-2"}>
                            <span
                                className={
                                    "button is-small is-success has-text-white has-text-weight-bold mr-2"
                                }>
                                {"603"}
                            </span>
                            {"leaves"}
                        </p>
                    </div>
                </div>

                <div className={"mobileUtils is-transparent mb-0 p-2"}>
                    <p className={"is-size-7"}>
                        <a className={"button is-light is-rounded m-1 is-small"}>
                            <FontAwesomeIcon icon={faClock} />
                        </a>
                    </p>
                    <p className={"is-size-7"}>
                        <a className={"button is-light is-rounded m-1 is-small"}>
                            <FontAwesomeIcon icon={faUsers} />
                        </a>
                    </p>
                    <p className={"is-size-7"}>
                        <a className={"button is-light is-rounded m-1 is-small"}>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                        </a>
                    </p>
                </div>

                <div className={"mobileTreeInfo has-background-primary-light"}>
                    {"Bob"}
                </div>

                <LeafletMap />
            </MediaQuery>
        </>
    );
}

export default GameMap;
