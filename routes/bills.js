import express from "express";
var router = express.Router();
import {
  billController,
  addBillController,

} from "../controllers/billController.js";


router.get("/get-bills", billController);
router.post("/add-bills", addBillController);

export default router;
