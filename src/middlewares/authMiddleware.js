const jwt = require("jsonwebtoken");
const { User } = require("../models");

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    const user = await User.findByPk(decoded.id, {
      attributes: ["id", "name", "role"],
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid User" });
    }

    req.user = user;
    
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
