import express from "express";
import UserRouter from "./user.routes";
import JobRouter from "./job.routes";
import AddressRouter from "./address.routes";

const router = express.Router();

router.get("/healthcheck", (_, res) => {
  res.sendStatus(200);
});

/**
 * TOP QUERY
 */
router.use(JobRouter);
router.use(AddressRouter);
/**
 * INTERNAL
 */
router.use(UserRouter);

export default router;
