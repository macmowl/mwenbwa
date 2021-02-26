import User from "./../models/user.model";
import Tree from "./../models/tree.model";

exports.update = async (req, res) => {
    const {treeId, userId} = req.body;
    try {
        const tree = await Tree.findOne({_id: treeId});
        const user = await User.findOne({_id: userId});
        if (tree.isFree) {
            if (tree.owner) {
                tree.owners.push(tree.owner);
            }
            user.trees.push(tree._id);
            user.leaves -= tree.leaves;

            await Tree.updateOne(
                {_id: treeId},
                {
                    owner: user._id,
                    isFree: false,
                    owners: tree.owners,
                },
            );
            await User.updateOne(
                {_id: userId},
                {
                    leaves: user.leaves,
                    trees: user.trees,
                },
            );
        }

        res.status(204).json({
            tree,
            user,
        });
    } catch (err) {
        console.log(err);
    }
};
