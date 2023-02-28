import express from "express";
var router = express.Router();
import {
  loginController,
  registerController,
  
} from "../controllers/userController.js";


router.post("/login", loginController);
router.post("/register", registerController);

export default router;
