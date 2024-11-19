import { Router } from "express";
import { User } from "../models/user.model.js";
import { authCallbak } from "../controller/auth.controller.js";

const router = Router();

router.post("/callback", authCallbak);

export default router;
