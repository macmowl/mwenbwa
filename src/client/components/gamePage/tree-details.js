import React, {
    useState,
    forwardRef,
    useImperativeHandle,
    useContext,
    useEffect,
} from "react";
import IconLeave from "../gamePage/icons/leaves";
import IconTree from "../gamePage/icons/tree";
import useTree from "../../hooks/use-tree";
import {UserContext} from "../../hooks/user-context";
import useRefresh from "../../hooks/use-refresh";

const TreeDetails = forwardRef((props, ref) => {
    const {treeUp} = useRefresh();
    const {user} = useContext(UserContext);
    const {buyTree} = useTree();
    const {getTreeInfo} = useTree();
    const [treeInfo, setTreeInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(treeUp);
    }, [treeUp]);

    useImperativeHandle(ref, () => ({
        DisplayTreeInfo(treeId) {
            getTreeInfo(treeId).then(result => {
                if (result.succeed) {
                    setTreeInfo(result.data.tree);
                } else {
                    setError(
                        `An error occurs while retrieving data :${result.error}`,
                    );
                }
            });
        },
    }));

    const handleBuy = e => {
        console.log("clicked", treeInfo._id);
        e.preventDefault();
        buyTree(treeInfo._id).then(res => console.log(res));
    };
    /* eslint-disable */
    return (
        <>
        {(() => {
            if (treeInfo) {
                return  <div className={"box m-3 has-text-centered"}>
                            <IconTree />
                            <p className={"has-text-weight-bold has-text-black"}>
                                {treeInfo.generatedName ? treeInfo.generatedName : 'Unnamed tree 😢'}
                            </p>
                            <p className={"is-size-7"}>
                                {treeInfo.latinName}
                            </p>

                            <IconLeave />

                            {treeInfo.leaves}
                            <p className={`mt-1 has-text-centered`}>
                                <a
                                    className={
                                        `button is-small is-rounded ${treeInfo.owner === user._id ? "is-outlined" : "is-info"}`
                                    }
                                    disabled={treeInfo.owner === user._id}
                                    onClick={handleBuy}
                                    >
                                    {treeInfo.owner === user._id ? "Already yours" : " Buy "}
                                </a>
                            </p>
                            <div className={"is-inline-block has-text-centered"}>
                                <table className={"is-inline-block my-4 is-size-7"}>
                                    <thead>
                                        <tr>
                                            <th>{"Owner"}</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>{treeInfo.owner || '/'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className={"is-size-7 has-text-weight-bold"}>{"Previous owners"}</p>
                                <ul>
                                    {treeInfo.owners ? treeInfo.owners.map(owner => (
                                        <li className={"is-size-7"}>{owner}</li>
                                    )) : "/"}
                                </ul>
                            </div>
                        </div>
            } else if(error) {
                return <div>
                    <p>{error}</p>
                </div>
            } else {
                    return  <div className={"box m-3 has-text-centered"}>
                    <p>{"No tree selected"}</p>
                </div>
            }
            })()}
        </>
    )
    /* eslint-disable */
});

export default TreeDetails;
