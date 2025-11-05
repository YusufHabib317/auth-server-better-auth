import { Router } from "express";

const router = Router();

// API version info
router.get("/", (_req, res) => {
  res.json({
    name: "Kasroad Auth Server",
    version: "1.0.0",
    status: "ready",
  });
});

export default router;
