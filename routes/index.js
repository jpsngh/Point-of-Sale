import express from "express";
var router = express.Router();
import {
  itemController,
  addItemController,
  updateItemController,
  deleteItemController,
} from "../controllers/itemController.js";


router.get("/get-item", itemController);
router.post("/add-item", addItemController);
router.put("/update-item", updateItemController);
router.delete("/delete-item", deleteItemController);
export default router;
