/* eslint-disable prettier/prettier */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); //ensure npm module jsonwebtoken is installed
//const User = require("../models/user.model"); //must be import
import User from "../models/user.model";
const {validationResult} = require("express-validator");

// eslint-disable-next-line no-unused-vars
exports.register = (req, res, next) => {
    bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
       
            const user = new User({
                email: req.body.email,
                username: req.body.username,//required
                password: hash,
                color: "#7FBA28" //required
                
            });

            user.save()
            .then(() =>
                res.status(201).json({message: "Utilisateur créé !"}),
            )
            .catch((error) => res.status(400).json({error}));

    })
    .catch((error) => res.status(500).json({"AIE AIE " : error}));
     
};

exports.login = (req, res, next) => {
    User.findOne({email: req.body.email})
        .then((user) => {
            if (!user) {
                return res
                    .status(401)
                    .json({error: "Utilisateur non trouvé !'"});
            }
            bcrypt
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
                        token: jwt.sign(
                            {userId: user._id},
                            "RANDOM_TOKEN_SECRET",
                            {expiresIn: "24h"},
                        ),
                    });
                })
                .catch((error) => res.status(500).json({error}));
        })
        .catch((error) => res.status(500).json({error}));
};
