import express from 'express';
import AuthController from "../controller/AuthController";

const router = express.Router();

router.post("/register", AuthController.registerNewUser);
router.post("/login", AuthController.loginUser);

export default router;