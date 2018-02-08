const path = require("path");
const bodyParser = require('body-parser');


module.exports = (app)=>{
    app.get("/survey", (req, res)=>{
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    app.use((req, res)=>{
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};