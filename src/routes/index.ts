import express from "express";
import UserRouter from "./user.routes";

const router = express.Router();

router.get("/healthcheck", (_, res) => {
  res.sendStatus(200);
});

/**
 * INTERNAL
 */
router.use(UserRouter);

export default router;
