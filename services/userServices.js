var UserModel = require("../models/userModel");
var userServices = {};

userServices.getAllUser = function(){
    return UserModel.find();
}

userServices.signup= function(username, password, age, address){
    return UserModel.create({
        username: username,
        password: password,
        age: age,
        address: address
    })
}

userServices.login= function(user){
    var { username, password } = user
    return UserModel.findOne({
        username: username,
        password: password
    })
}

// function getAll(){}
// module.exports = {
//     getAll : getAll
// }


module.exports = userServices