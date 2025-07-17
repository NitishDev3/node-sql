const sequelize = require("../config/dbConfig");
const User = require("./userModel");
const Project = require("./projectModel");
const Task = require("./taskModel");

//associations
// user -> project
User.hasMany(Project, {foreignKey : 'created_by'});
Project.belongsTo(User, {foreignKey : 'created_by', as : 'creator'});

// project -> task
Project.hasMany(Task, {foreignKey : 'project_id'});
Task.belongsTo(Project, {foreignKey : 'prject_id'});

//user -> task
User.hasMany(Task, {foreignKey : 'assigned_to'});
Task.belongsTo(User, {foreignKey : 'assigned_to', as : 'assignee'});

module.exports = {
    sequelize,
    User,
    Project,
    Task
}