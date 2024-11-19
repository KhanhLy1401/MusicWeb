import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("User router with get method");
});

export default router;
