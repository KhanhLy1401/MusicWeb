import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Songs with get method");
});
export default router;
