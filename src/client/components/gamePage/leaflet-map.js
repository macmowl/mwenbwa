import React from "react";
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import treeData from "../../../../data/bintrees.json";
import {divIcon, point} from "leaflet";
import TreeIcon from "./../tree-icon";
import MarkerClusterGroup from "react-leaflet-markercluster";
import ReactDomServer from "react-dom/server";

const LeafletMap = () => {
    const setIconTree = (shape, height, color) =>
        divIcon({
            html: ReactDomServer.renderToString(
                <div>
                    <TreeIcon shape={shape} color={color} />
                </div>,
            ),
            className: "marker-cluster-custom",
            iconSize: [19, 54],
            iconAnchor: [19, 54],
        });

    const createClusterCustomIcon = function (cluster) {
        return divIcon({
            html: `${cluster.getChildCount()}`,
            className: "marker-cluster-custom",
            iconSize: point(50, 46, true),
        });
    };

    const treesMarker = treeData.map(tree => (
        <Marker
            key={tree._id.$oid}
            position={tree.location.coordinates}
            icon={setIconTree(tree.shape, tree.height, tree.color)}
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
