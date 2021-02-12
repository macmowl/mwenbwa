import React from "react";
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import treeData from "../../../../data/bintrees.json";
import {Icon} from "leaflet";
import {TREE_SHAPES} from "../../core/constants.js";

const LeafletMap = () => {
    console.log(TREE_SHAPES[1]);
    const setRndIcon = shape => {
        const treeIcon = new Icon({
            iconUrl: TREE_SHAPES[shape],
            iconSize: [25, 35],
            iconAnchor: [25, 17],
        });
        return treeIcon;
    };

    const treesMarker = treeData.map(tree => (
        <Marker
            key={tree._id.$oid}
            position={tree.location.coordinates}
            icon={setRndIcon(tree.shape)}
        />
    ));
    return (
        <MapContainer center={[50.64497, 5.57333]} zoom={16}>
            <TileLayer
                attribution={
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            {treesMarker}
        </MapContainer>
    );
};

export default LeafletMap;
