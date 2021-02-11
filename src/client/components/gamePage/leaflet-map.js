import React from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import treeData from "../../../../data/bintrees.json";

const LeafletMap = () => {
    // const [activeTree, setAcativeTree] = useState(null);
    console.log(treeData);
    return (
        <MapContainer center={[50.64497, 5.57333]} zoom={16}>
            <TileLayer
                attribution={
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            {/* {treeData.map(tree => (
                    <Marker position={[
                        tree.location.coordinates[1],
                        tree.location.coordinates[0]
                    ]}>
                    
                    </Marker>
                ))} */}
        </MapContainer>
    );
};

export default LeafletMap;
