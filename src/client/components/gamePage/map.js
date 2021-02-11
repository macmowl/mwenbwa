import React from "react";
import Profile from "./profile";
import TreeDetails from "./tree-details";
import LeafletMap from "./leaflet-map";

const GameMap = () => (
    <>
        <LeafletMap />
        <div className={"Sidebar"}>
            <Profile />
            <TreeDetails />
        </div>
    </>
);

export default GameMap;
