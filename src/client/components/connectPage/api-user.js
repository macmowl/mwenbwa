import axios from "axios";

export const createUser = user => {
    axios
        .get("/api/trees")
        .then(res => {
            const treeData = res.data;
            user.trees = [];
            user.leaves = 0;
            for (let i = 0; i < treeData.length; i++) {
                if (!treeData[i].owner && user.trees.length < 3) {
                    user.trees.push(treeData[i]._id);
                    user.leaves += treeData[i].leaves;
                } else if (user.trees.length === 3) {
                    break;
                }
                i++;
            }
        })
        .then(() => {
            axios.post(`/api/auth/register`, user);
        })
        .catch(err => console.log(err));
};
