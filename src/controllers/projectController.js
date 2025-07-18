const { Project } = require("../models")

exports.getAll = async (req, res) =>{
    try {
        if(req.user.role === "admin"){
            //TODO: paginations 
            const projects = await Project.findAll();
            res.status(200).json({
                message : "Fetched all the projects",
                projects
            })
        }else if(req.user.role === "manager"){
            //TODO: Pagination
            const projects = await Project.findAll({
                where : {
                    created_by : req.user.id,
                }
            })
            res.status(200).json({
                message : "Fetched projects",
                projects
            })
        }
    } catch (error) {
        res.status(500).json({
            message : "Something went wrong",
            error
        })
    }
}

exports.getProject = async (req, res) =>{
    try {

        
    } catch (error) {
        res.status(500).json({
            message : "Something went wrong",
            error
        })
    }
}

exports.createProject = async (req, res) =>{
    try {

        
    } catch (error) {
        res.status(500).json({
            message : "Something went wrong",
            error
        })
    }
}

exports.updateProject = async (req, res) =>{
    try {

        
    } catch (error) {
        res.status(500).json({
            message : "Something went wrong",
            error
        })
    }
}

exports.deleteProject = async (req, res) =>{
    try {

        
    } catch (error) {
        res.status(500).json({
            message : "Something went wrong",
            error
        })
    }
}