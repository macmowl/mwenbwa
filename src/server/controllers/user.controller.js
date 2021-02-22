const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import User from "../models/user.model";

exports.register = (req, res) => {
    bcrypt
        .hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                username: req.body.username,
                password: hash,
                color: req.body.color, //required//req.body.color, //required
                trees: res.locals.trees,
                leaves: res.locals.leaves,
            });

            user.save()
                .then(() =>
                    res.status(201).json({message: "Utilisateur créé !"}),
                )
                .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({error}));
};

exports.login = (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                return res.status(401).json({error: "User not found!'"});
            }
            bcrypt
                .compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        console.log("Login Not Ok");
                        return res
                            .status(401)
                            .json({error: "Incorrect password!"});
                    }
                    console.log("Login Ok");
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            {userId: user._id},
                            "RANDOM_TOKEN_SECRET",
                            {expiresIn: "24h"},
                        ),
                    });
                    return null;
                })
                .catch(error => res.status(500).json(error));
            return null;
        })
        .catch(error => res.status(500).json(error));
};
