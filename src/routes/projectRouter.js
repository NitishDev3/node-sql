const express = require("express");
const router = express.Router();


//Admin- all Manager- concern projects
router.get("/getall", projectMiddleware, );
router.get("/get/:projectId", projectMiddleware, );

router.post("/create", projectMiddleware, )
router.patch("/update/:projectId", projectMiddleware,)
router.delete("/delete/:projectId", projectMiddleware, )




module.exports = router;