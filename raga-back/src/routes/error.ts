import express, { Request, Response, NextFunction } from "express";
import { ResponseInterface } from "../interfaces/response";
const router = express.Router();

router.use(
  "*",
  (req: Request, res: Response<ResponseInterface>, next: NextFunction) => {
    res.status(404).json({
      message: "Endpoint not found",
      statusCode: 404,
      timestamp: new Date().toISOString(),
      data: null,
      error: null,
    });
  },
);

export default router;
