require("dotenv").config();

const express = require("express");
const sequelize = require("./config/dbConfig");
const router = require("./routes");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

//routes
app.use("/api", router);


sequelize.sync({ alter: true })
    .then(() => console.log('✅ Tables synced'))
    .catch(err => console.error('❌ Sync failed:', err));

sequelize.authenticate()
    .then(() => {
        console.log("DB connected successfully")
        app.listen(port, () => {
            console.log(`App running on port ${port}`);
        })
    })
    .catch((error) => {
        console.log("Something went wrong : ", error);
    })


