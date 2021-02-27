import React, {useState, useEffect} from "react";
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import {divIcon, point} from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import TreeIcon from "./../tree-icon";
// import TreeMarker from "./tree-marker";
import axios from "axios";
import ReactDomServer from "react-dom/server";
import useRefresh from "../../hooks/use-refresh";

const LeafletMap = ({onSelectedTreeChanged}) => {
    const [treeData, setTreeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [treesMarker, setTreesMarker] = useState(true);
    const {treeUp} = useRefresh();

    useEffect(() => {
        axios
            .get(`/api/trees`)
            .then(res => {
                setTreeData(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

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

    const markerClick = event => {
        const treeId = event.sourceTarget.options["data-id"];
        onSelectedTreeChanged(treeId);
    };

    useEffect(() => {
        if (treeUp != null) {
            <Marker
                data-id={treeUp._id}
                key={treeUp._id}
                position={treeUp.location.coordinates.reverse()}
                icon={setIconTree(treeUp.shape, treeUp.color)}
                eventHandlers={{
                    click: e => {
                        markerClick(e);
                    },
                }}
            />;
        }
    }, [treeUp]);

    useEffect(() => {
        setTreesMarker(
            treeData.map(tree => (
                <Marker
                    data-id={tree._id}
                    key={tree._id}
                    position={tree.location.coordinates.reverse()}
                    icon={setIconTree(tree.shape, tree.color)}
                    eventHandlers={{
                        click: e => {
                            markerClick(e);
                        },
                    }}
                />
            )),
        );
    }, [treeData]);

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
                    {treesMarker}
                    {/* <TreeMarker data={treeData} /> */}
                </MarkerClusterGroup>
            </MapContainer>
        </>
    );
};

export default LeafletMap;
