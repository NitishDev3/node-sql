const express = require("express");
const { getAll, getProject, createProject, updateProject, deleteProject } = require("../controllers/projectController");
const auth = require("../middlewares/authMiddleware");
const projectMiddleware = require("../middlewares/projectMiddleware")
const router = express.Router();


//Admin- all Manager- concern projects
router.get("/getall", auth, projectMiddleware, getAll );
router.get("/get/:projectId", auth, projectMiddleware, getProject);

router.post("/create", auth, projectMiddleware, createProject);
router.patch("/update/:projectId", auth, projectMiddleware, updateProject);
router.delete("/delete/:projectId", auth, projectMiddleware, deleteProject);


module.exports = router;