const { Project } = require("../models");

exports.getAll = async (req, res) => {
  try {
    if (req.user.role === "admin") {
      //TODO: paginations
      const projects = await Project.findAll();
      res.status(200).json({
        message: "Fetched all the projects",
        projects,
      });
    } else if (req.user.role === "manager") {
      //TODO: Pagination
      const projects = await Project.findAll({
        where: {
          created_by: req.user.id,
        },
      });
      res.status(200).json({
        message: "Fetched projects",
        projects,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

exports.getProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findOne({
      where: {
        id: projectId,
      },
    });

    if (req.user.role === "admin") {
      res.status(200).json({
        message: "Fetched project",
        project,
      });
    } else if (req.user.role === "manager") {
      if (project.created_by === req.user.id) {
        res.status(200).json({
          message: "Fetched project",
          project,
        });
      }
    } else {
      res.status(403).json({
        message: "You don't have permission to access this project",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

exports.createProject = async (req, res) => {
  try {
    const { name, description, created_by } = req.body;

    if (req.user.role === "manager") {
      //maneger
      const project = await Project.create({
        name,
        description,
        created_by: req.user.id,
      });

      res.status(201).json({
        message: "Project creted successfully",
        project,
      });
    } else {
      //admin
      if(!created_by){
        return res.status(400).json({
            message: "Please provide the created_by(Manager ID)",
            });
      }
      const project = await Project.create({
        name,
        description,
        created_by,
      });

      res.status(201).json({
        message: "Project creted successfully",
        project,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    await Project.update(req.body, {
      where: {
        id: projectId,
      },
    });

    const updatedProject = await Project.findByPk(projectId);
    res.status(200).json({
      message: "Project updated successfully",
      updatedProject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const {projectId} = req.params;
    await Project.destroy({
        where: {
            id: projectId
            }
            });

    res.status(200).json({
        message : "Project deleted successfully"
    })

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};
