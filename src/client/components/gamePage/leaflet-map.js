import React from "react";
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import treeData from "../../../../data/bintrees.json";
import {Icon, divIcon, point} from "leaflet";
// import * as L from "leaflet";
import {treeShapes} from "../../core/constants";
import MarkerClusterGroup from "react-leaflet-markercluster";

const LeafletMap = () => {
    const setIconTree = shape => {
        const treeIcon = new Icon({
            iconUrl: treeShapes[shape],
            iconSize: [25, 35],
            iconAnchor: [25, 17],
        });
        return treeIcon;
    };

    const createClusterCustomIcon = function (cluster) {
        return divIcon({
            html: `${cluster.getChildCount()}`,
            className: "marker-cluster-custom",
            iconSize: point(47, 69, true),
        });
    };

    const treesMarker = treeData.map(tree => (
        <Marker
            key={tree._id.$oid}
            position={tree.location.coordinates}
            icon={setIconTree(tree.shape)}
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
            <MarkerClusterGroup
                iconCreateFunction={createClusterCustomIcon}
                spiderfyDistanceMultiplier={2}
                disableClusteringAtZoom={18}>
                {treesMarker}
            </MarkerClusterGroup>
        </MapContainer>
    );
};

export default LeafletMap;
