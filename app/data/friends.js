let generateUUID = require("../public/assets/js/utils");

let friendArray = [
    {
       name: "John",
       photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
       scores: [2,4,3,1,5,4,2,3,2,5],
       uid: generateUUID()
    }
]

module.exports = friendArray;