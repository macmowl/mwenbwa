const express = require("express");
const router = express.Router();
//const auth = require("../middleware/auth");
const {check} = require("express-validator");
const userCtrl = require("../controllers/user.controller");

// router.get("/", auth, userCtrl.getAllUsers);
// router.get("/:id", auth, userCtrl.getOneUser);
router.post(
    "/register",
    [
        check("username", "Username is required").not().isEmpty(),
        check("email", "Please include a valid email").isEmail(),
        check(
            "password",
            "Please enter a password with 6 or more characters",
        ).isLength({min: 6}),
    ],
    userCtrl.register,
);
router.post(
    "/login",
    [
        check("email", "Please include a valid email").isEmail(),
        check("password", "Password is required.").exists(),
    ],
    userCtrl.login,
);
// router.put("/:id", auth, userCtrl.updateUser);
// router.delete("/:id", auth, userCtrl.deleteUser);

module.exports = router;
