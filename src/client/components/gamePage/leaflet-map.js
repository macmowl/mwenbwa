import React from "react";
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import treeData from "../../../../data/bintrees.json";

const LeafletMap = () => {
    const treesMarker = treeData.map(tree => (
        <Marker key={tree._id.$oid} position={tree.location.coordinates} />
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
