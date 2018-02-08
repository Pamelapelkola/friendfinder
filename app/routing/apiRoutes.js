const bodyParser = require('body-parser');
let friendData = require("../data/friends");
const reducer = (accumulator, currentValue) => accumulator + currentValue;
module.exports = (app)=>{
    app.get("/api/friends", (req, res)=>{
        res.json(friendData);
    });
    app.post("/api/friends", (req, res)=>{
        let e = req.body;
        let l = friendData.length
        let matchValArr = [];
        for (let i = 0; i < l; i++) {
            let diffArr = [];
            let m = friendData[i].scores.length
            for (let j = 0; j < m; j++) {
               let diff = e.scores[j] - friendData[i].scores[j];
               diff = Math.abs(diff);
               diffArr.push(diff);
            }
            let totalDiff = diffArr.reduce(reducer);
            matchValArr.push(totalDiff);
        }
        let matchMin = Math.min.apply(null, matchValArr);
        let matchIndex = matchValArr.indexOf(matchMin);
        console.log(friendData[matchIndex]);
        friendData.push(e);
        res.json(friendData[matchIndex]);
    });
};