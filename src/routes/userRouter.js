const express = require("express");
const { listUsers, getUser, createUser, updateUser, deleteUser, searchUsers } = require("../controllers/userController");
const auth = require("../middlewares/authMiddleware");
const adminCheck = require("../middlewares/adminCheck");
const router = express.Router();

router.get("/listall", auth, listUsers);
router.get("/get/:userId", auth, getUser);
router.get("/search/:keyword", auth, searchUsers);

//only admins will have access to below routes
router.post("/create", auth, adminCheck, createUser)
router.patch("/update/:userId", auth, adminCheck, updateUser);
router.delete("/delete/:userId", auth, adminCheck, deleteUser);

module.exports = router;