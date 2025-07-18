const checkAdminManager = async (req, res, next) => {
  try {
    const { role } = req.user;
    if (role === "admin" || role === "manager") {
      next();
    } else {
      return res.status(403).json({ message: "Access denied" });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

module.exports = checkAdminManager;
