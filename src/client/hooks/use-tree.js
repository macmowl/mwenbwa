import API from "../utils/api";
import {useContext} from "react";
import {UserContext} from "./user-context";
import useRefresh from "./use-refresh";

export default function useTree() {
    const {user} = useContext(UserContext);
    const {setTreeUp} = useRefresh();

    const buyTree = async id => {
        const buy = await API.post(`/api/trees/buy`, {
            treeId: id,
            userId: user._id,
        })
            .then(res => {
                setTreeUp(res.data);
            })
            .catch(err => console.log(err));
        return buy;
    };

    const getTreeInfo = treeId =>
        API.get(`api/trees/${treeId}`)
            .then(res => {
                setTreeUp(res.data);
                return {succeed: true, data: res.data};
            })
            .catch(err => ({succeed: false, error: err}));

    return {
        buyTree,
        getTreeInfo,
    };
}
