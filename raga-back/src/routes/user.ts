import express from "express";
const router = express.Router();

router.get("/sign-up", async (req, res) => {
  res.status(200).json({
    message: "sign-up",
  });
});

router.get("/sign-in", async (req, res) => {
  res.status(200).json({
    message: "sign-in",
  });
});

router.get("/log-out", async (req, res) => {
  res.status(200).json({
    message: "log-out",
  });
});

export default router;
