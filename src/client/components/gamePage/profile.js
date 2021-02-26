import React, {useRef} from "react";
import UserDetails from "./user-details";
import Ranked from "./ranked";
import useAuth from "./../../hooks/api-user";

import {
    faClock,
    faSignOutAlt,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Profile = () => {
    const refRanked = useRef(null);
    const {logoutUser} = useAuth();

    const showRanks = () => {
        refRanked.current.showModal();
    };

    return (
        <>
            <Ranked ref={refRanked} />
            <UserDetails />

            <div className={"box m-3"}>
                <div
                    className={
                        "columns is-gapless is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd"
                    }>
                    <div className={"column has-text-centered is-size-7"}>
                        <a className={"has-text-black-ter"}>
                            <FontAwesomeIcon icon={faClock} />
                            <span className={"is-block is-small"}>
                                {"Game log"}
                            </span>
                        </a>
                    </div>

                    <div className={"column has-text-centered is-size-7"}>
                        <a className={"has-text-black-ter"} onClick={showRanks}>
                            <FontAwesomeIcon icon={faUsers} />
                            <span className={"is-block is-small"}>
                                {"Ranking"}
                            </span>
                        </a>
                    </div>

                    <div className={"column has-text-centered is-size-7"}>
                        <a className={"has-text-black-ter"}>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            <span
                                className={"is-block is-small"}
                                onClick={() => logoutUser()}>
                                {"Logout"}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
