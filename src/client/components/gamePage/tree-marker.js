import React from "react";
import {Marker} from "react-leaflet";
import {divIcon} from "leaflet";
import TreeIcon from "./../tree-icon";
import ReactDomServer from "react-dom/server";

const TreeMarker = ({data}) => {
    const setIconTree = (shape, color) =>
        divIcon({
            html: ReactDomServer.renderToString(
                <div>
                    <TreeIcon shape={shape} color={color} />
                </div>,
            ),
            className: "",
            iconSize: [19, 54],
            iconAnchor: [19, 54],
        });

    return data.map(tree => (
        <Marker
            key={tree._id}
            position={tree.location.coordinates.reverse()}
            icon={setIconTree(tree.shape, tree.color)}
        />
    ));
};

export default TreeMarker;
