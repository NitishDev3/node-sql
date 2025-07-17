const { CharsetToEncoding } = require("mysql2");

const adminCheck = async(req, res, next)=>{
    try {
        const {role} = req.user;

        if(role !== 'admin'){
            return res.status(401).json({message : "Unauthorized"});
        }
        
        next();

    } catch (error) {
        return res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = adminCheck;