var mongoose = require("../config/dbConnect");
var Schema = mongoose.Schema;
//định nghĩa cột ( key trong 1 bảng ghi )
var userSchema = new Schema({
    username: String,
    password: String,
    age: Number,
    address: String
},{
    collection: "user"
})
//định nghĩa bảng
var UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
