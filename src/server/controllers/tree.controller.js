import Tree from "../models/tree.model";

const list = (req, res) => {
    Tree.find()
        .then(trees => res.status(200).json(trees))
        .catch(error => res.status(400).json({error}));
};

const create = (req, res) => {
    delete req.body._id;
    const tree = new Tree({
        ...req.body,
    });
    tree.save()
        .then(() => res.status(201).json({message: "Tree created"}))
        .catch(error => res.status(400).json({error}));
};

const read = (req, res) => {
    Tree.findOne({_id: req.params.id})
        .then(tree => res.status(200).json({tree}))
        .catch(error => res.status(404).json({error}));
};

const update = (req, res) => {
    Tree.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(() =>
            res.status(200).json({message: "The tree has been modified."}),
        )
        .catch(error => res.status(400).json({error}));
};

const remove = (req, res) => {
    Tree.deleteOne({_id: req.params.id})
        .then(() =>
            res.status(200).json({message: "The tree has been deleted."}),
        )
        .catch(error => res.status(400).json({error}));
};

export default {list, create, read, update, remove};
