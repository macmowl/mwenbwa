import User from "./../models/user.model";
import Tree from "./../models/tree.model";

exports.update = async (req, res) => {
    const {treeId, userId} = req.body;
    try {
        const tree = await Tree.findOne({_id: treeId});
        const user = await User.findOne({_id: userId});
        if (tree.isFree && user.leaves >= tree.leaves) {
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
                    color: user.color,
                },
            );
            await User.updateOne(
                {_id: userId},
                {
                    leaves: user.leaves,
                    trees: user.trees,
                },
            );
        } else {
            res.status(200).json({
                free: tree.isFree,
                money: Boolean(user.leaves >= tree.leaves),
            });
        }

        res.status(204).json({
            success: true,
        });
    } catch (err) {
        console.log(err);
    }
};
