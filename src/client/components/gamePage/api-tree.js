import API from "../../utils/api";
import {useContext} from "react";
import {UserContext} from "../../hooks/user-context";

export default function useTree() {
    const {user} = useContext(UserContext);

    const buyTree = async id => {
        const buy = await API.post(`/api/trees/buy`, {
            treeId: id,
            userId: user._id,
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
        return buy;
    };

    return {
        buyTree,
    };
}
