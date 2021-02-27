import Tree from "../models/tree.model";

module.exports = async function addTreesAndLeaves(req, res, next) {
    res.locals.trees = [];
    res.locals.leaves = 0;
    /* eslint-disable no-await-in-loop */
    for (let i = 0; i < 3; i++) {
        const tree = await Tree.findOneAndUpdate(
            {$or: [{isFree: null}, {isFree: true}]},
            {$set: {isFree: false}},
        );
        if (!tree) {
            res.locals.leaves = 1500;
            res.locals.trees = [];
        } else {
            res.locals.leaves += tree.leaves;
            res.locals.trees.push(tree.id);
        }
    }
    /* eslint-disable no-await-in-loop */
    next();
};
