import express from "express";
import treeCtrl from "../controllers/tree.controller";
import buyTreeCtrl from "../controllers/buy-tree.controller";

const router = express.Router();

router.get("/", treeCtrl.list);
router.post("/", treeCtrl.create);

router.get("/:id", treeCtrl.read);
router.post("/buy", buyTreeCtrl.update);

export default router;
