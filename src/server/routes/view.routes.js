const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controller");

router.get("/user", userCtrl.checkUser);

module.exports = router;
