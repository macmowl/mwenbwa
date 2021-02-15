/* eslint-disable prettier/prettier */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const bcryptjs = require("bcryptjs");
const User = require("../models/user.model");
// eslint-disable-next-line no-unused-vars
exports.register = (req, res, next) => {
    bcryptjs
        .hash(req.body.password, 10)
        .then((hash) => {
            const user = new User({
                email: req.body.email,
                password: hash,
            });
            user.save()
                .then(() =>
                    res.status(201).json({message: "Utilisateur créé !"}),
                )
                .catch((error) => res.status(400).json({error}));
        })
        .catch((error) => res.status(500).json({error}));
};

exports.login = (req, res, next) => {
    User.findOne({email: req.body.email})
        .then((user) => {
            if (!user) {
                return res
                    .status(401)
                    .json({error: "Utilisateur non trouvé !'"});
            }
            bcryptjs
                .compare(req.body.password, user.password)
                // eslint-disable-next-line consistent-return
                // eslint-disable-next-line prettier/prettier
                .then((valid) => {
                    if (!valid) {
                        return res
                            .status(401)
                            .json({error: "Mot de passe incorrect !"});
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: "TOKEN",
                    });
                })
                .catch((error) => res.status(500).json({error}));
        })
        .catch((error) => res.status(500).json({error}));
};
