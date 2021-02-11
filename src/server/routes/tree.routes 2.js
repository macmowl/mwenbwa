import express from "express";
import treeCtrl from "../controllers/tree.controller";

const router = express.Router();

router.get("/", treeCtrl.list);
router.post("/", treeCtrl.create);

router.get("/:id", treeCtrl.read);
router.put("/:id", treeCtrl.update);
router.delete("/:id", treeCtrl.remove);

export default router;
