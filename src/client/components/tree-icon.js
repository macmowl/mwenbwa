import React, {useState} from "react";
import {FREE_TREE_COLORS} from "../core/constants.js";
import Tree1 from "../assets/map-icon/tree1.svg";
import Tree2 from "../assets/map-icon/tree2.svg";
import Tree3 from "../assets/map-icon/tree3.svg";
import Tree4 from "../assets/map-icon/tree4.svg";
import Tree5 from "../assets/map-icon/tree5.svg";
import Tree6 from "../assets/map-icon/tree6.svg";

const TreeIcon = ({shape, color}) => {
    const [fillTree, setFillTree] = useState(color);
    /* eslint-disable no-undefined */
    if (fillTree === undefined) {
        /* eslint-disable no-undefined */
        setFillTree(FREE_TREE_COLORS[Math.floor(Math.random() * 4)]);
    }

    return (
        <>
            {(() => {
                switch (shape) {
                    case 1:
                        return <Tree1 fill={fillTree} />;
                    case 2:
                        return <Tree2 fill={fillTree} />;
                    case 3:
                        return <Tree3 fill={fillTree} />;
                    case 4:
                        return <Tree4 fill={fillTree} />;
                    case 5:
                        return <Tree5 fill={fillTree} />;
                    case 6:
                        return <Tree6 fill={fillTree} />;
                    default:
                        return null;
                }
            })()}
        </>
    );
};

export default TreeIcon;
