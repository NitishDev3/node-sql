const sequelize = require("../config/dbConfig");
const {DataTypes} = require("sequelize");


const Task = sequelize.define('Task', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : DataTypes.TEXT,
    },
    project_id : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    assigned_to : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    status : {
        type: DataTypes.ENUM('new', 'in progress', 'completed', 'cancelled'),
        defaultValue : "new",
    }
}, {
    tableName : "tasks"
})

module.exports = Task;