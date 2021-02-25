import React, {useState, useEffect} from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import {divIcon, point} from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import TreeMarker from "./tree-marker";
import axios from "axios";

const LeafletMap = () => {
    const [treeData, setTreeData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`/api/trees`)
            .then(res => {
                setTreeData(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const createClusterCustomIcon = function (cluster) {
        return divIcon({
            html: `${cluster.getChildCount()}`,
            className: "marker-cluster-custom",
            iconSize: point(50, 46, true),
        });
    };
    if (loading) {
        return (
            <div
                className={
                    "heightScreen columns is-vcentered has-background-light"
                }>
                <div className={"column"}>
                    <h1 className={"is-size-2 has-text-centered"}>
                        {"Loading"}
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <>
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
                    {/* {treesMarker} */}
                    <TreeMarker data={treeData} />
                </MarkerClusterGroup>
            </MapContainer>
        </>
    );
};

export default LeafletMap;
