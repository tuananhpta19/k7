var express = require("express");
var app = express();

var path = require("path")

app.use(express.static(path.join(__dirname, 'public')))

var bodyParser = require('body-parser');
var userRouter = require("./routers/user")
var indexRouter = require("./routers/index")
//config bodypaser -> không có config k sử dụng truyền được dữ liệu
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json()) 


app.use("/user", userRouter);
app.use("/auth", indexRouter);

app.listen(3000, function(){
    console.log("ddang ket noi tai cong 3000");
})