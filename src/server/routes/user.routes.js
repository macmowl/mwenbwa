const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const userCtrl = require("../controllers/user.controller");
import addTree from "../middleware/add-new-trees";

router.get("/:id", userCtrl.getUser);
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
    addTree,
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

router.get("/logout", userCtrl.logout);
// router.put("/:id", auth, userCtrl.updateUser);
// router.delete("/:id", auth, userCtrl.deleteUser);

router.get("/ranks", userCtrl.getRanks);

module.exports = router;
