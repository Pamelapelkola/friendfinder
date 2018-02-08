let generateUUID = require("../public/assets/js/utils");

let friendArray = [
    {
       name: "John",
       photo: "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
       scores: [2,4,3,1,5,4,2,3,2,5],
       uid: generateUUID()
    },
    {
        name: "Jill",
        photo: "https://images.pexels.com/photos/858484/pexels-photo-858484.jpeg?h=350&auto=compress&cs=tinysrgb",
        scores: [1,1,1,1,1,1,1,1,1,1],
        uid: generateUUID()
    }
]

module.exports = friendArray;