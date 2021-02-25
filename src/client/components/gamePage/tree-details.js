import React,{ useState,forwardRef, useImperativeHandle } from "react";
import IconLeave from "../gamePage/icons/leaves";
import IconTree from "../gamePage/icons/tree";
import {getTreeInfo} from "../connectPage/api-user";

const TreeDetails = forwardRef((props, ref) => 
{
    const [treeInfo, setTreeInfo] = useState(null);
    const [error, setError] = useState(null);

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
        }
    
      }));

    return (
        <>
        {(() => {
      
            if (treeInfo) {
                return  <div className={"box m-3 has-text-centered"}>
                    <IconTree />
                    <p className={"has-text-weight-bold has-text-black"}>
                        {treeInfo.latinName}
                    </p>

                    <IconLeave />

                    {treeInfo.leaves}
                    <p className={"mt-1 has-text-centered"}>
                        <a
                            className={
                                "button is-small is-info has-text-white is-rounded"
                            }>
                            {" Buy "}
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
                                    <td>{"Suzy"}</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className={"is-size-7"}>
                            <thead>
                                <tr>
                                    <th>{"Previous owners"}</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>{"Luke"}</td>
                                </tr>
                                <tr>
                                    <td>{"Lorelai"}</td>
                                </tr>
                                <tr>
                                    <td>{"Rory"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            }
            else if(error)
            {
                return <div>
                    <p>{error}</p>
                </div>
            }
            else
            {
                    return  <div className={"box m-3 has-text-centered"}>
                    <p>{"No tree selected"}</p>
                </div>
            }
             
             })()}
    </>

    );
});

export default TreeDetails;
