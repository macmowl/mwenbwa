const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const AppError = require('./../utils/AppError');
const catchAsync = require("./../utils/catch-async");
const {promisify} = require("util");
import User from "../models/user.model";

const signJwt = id => jwt.sign({id}, "RANDOM_TOKEN_SECRET", {expiresIn: "24h"});

const encryptPw = async password => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
};

const sendToken = (user, statusCode, req, res) => {
    const token = signJwt(user._id);
    res.cookie("jwt", token, {
        expiresIn: "24h",
        httpOnly: true,
    });

    user.password = null;
    res.status(statusCode).json({
        status: "success",
        token,
        user,
    });
};

exports.register = async (req, res) => {
    const pw = await encryptPw(req.body.password);
    try {
        const newUser = await User.create({
            email: req.body.email,
            username: req.body.username,
            password: pw,
            color: req.body.color,
            trees: res.locals.trees,
            leaves: res.locals.leaves,
        });
        sendToken(newUser, 201, req, res);
    } catch (err) {
        res.status(401).json(err.message);
    }
};

exports.login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email}).select("+password");
        const compared = await bcrypt.compare(password, user.password);
        if (compared) {
            sendToken(user, 200, req, res);
        } else {
            res.status(400).json({message: "Login failed"});
        }
    } catch (err) {
        res.status(400).json(err.message);
    }
};

exports.checkUser = catchAsync(async (req, res) => {
    let currentUser;
    if (req.cookies.jwt) {
        const token = req.cookies.jwt;
        const decoded = await promisify(jwt.verify)(
            token,
            "RANDOM_TOKEN_SECRET",
        );
        currentUser = await User.findById(decoded.id);
    } else {
        currentUser = null;
    }
    res.status(200).send({currentUser});
});

exports.getUser = (req, res) => {
    User.findOne({_id: req.body._id})
        .then(user => res.status(200).json(user))
        .catch(error => res.status(404).json({error}));
};

exports.logout = (req, res) => {
    const options = {
        expires: new Date(Date.now()),
        httpOnly: true,
    };
    res.cookie("jwt", "expiredtoken", options);
    res.status(200).json({status: "success"});
};

exports.getRanks = (req, res) => {
    console.log(req);
    User.find({}, "username leaves", {
        skip: 0,
        limit: 10,
        sort: {leaves: "desc"},
    })
        .then(ranks => {
            console.log(ranks);
            return res.status(200).json({ranks});
        })
        .catch(error => res.status(500).json({error}));
};

exports.getUserInfo = (req, res) => {
    console.log(req);
    User.find({}, "username trees leaves", {
        skip: 0,
        limit: 1,
        sort: {leaves: "desc"},
    })
        .then(ranks => {
            console.log(ranks);
            return res.status(200).json({ranks});
        })
        .catch(error => res.status(500).json({error}));
};
