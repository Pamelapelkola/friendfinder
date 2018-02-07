let friendData = require("../data/friends");

module.exports = (app)=>{
    app.get("/api/friends", (req, res)=>{
        res.json(friendData);
    });
    app.post("/api/friends", (req, res)=>{
        friendData.push(req.body);
        res.json(true);
    });
    app.post("/api/clear", ()=>{
        friendData = [];
    });
};