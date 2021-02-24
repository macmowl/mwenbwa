const jwt = require("jsonwebtoken");
import User from "../models/user.model";
const {promisify} = require("util");

const decryptJwt = async token => {
    const jwtVerify = promisify(jwt.verify);
    const verify = await jwtVerify(token, "RANDOM_TOKEN_SECRET");
    return verify;
};

exports.secure = async (req, res, next) => {
    let token;
    if (req.cookies) {
        token = req.cookies.jwt;
    }
    if (!token || token === "expiredtoken") {
        return res.status(401).json({
            status: "Unauthorized",
            message: "You are not authorized to view this content",
        });
    }
    const jwtInfo = await decryptJwt(token);
    const user = await User.findById(jwtInfo.id);
    if (!user) {
        return res.status(401).json({
            status: "Unauthorized",
            message: "You are not authorized to view this content",
        });
    }
    /* eslint-disable require-atomic-updates */
    req.user = user;
    /* eslint-disable require-atomic-updates */

    next();
    return null;
};
