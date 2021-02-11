import React from "react";
import Profile from "./profile";
import TreeDetails from "./tree-details";
import LeafletMap from "./leaflet-map";

const GameMap = () => (
    <div className={"columns is-gapless is-multiline is-mobile"}>
        <div className={"column"}>
            <LeafletMap />
            {"test"}
        </div>

        <div className={"column has-background-primary is-one-fifth"}>
            <div className={"Sidebar"}>
                <Profile />
                <TreeDetails />
            </div>
        </div>
    </div>
);

export default GameMap;
