const express = require("express");
const router = express.Router();

const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const projectRouter = require("./projectRouter");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/project", projectRouter);

module.exports = router;