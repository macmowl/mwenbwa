import React from "react";
import UserDetails from "./user-details";
import Button from "./../button";

const Profile = () => (
    <>
        <UserDetails />
        <Button />
        <p>{"Gamelog"}</p>
        <p>{"ranking"}</p>
        <p>{"logout"}</p>
    </>
);

export default Profile;
