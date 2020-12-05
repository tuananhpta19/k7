var router =  require("express").Router();
var userService = require("../services/userServices")
router.get("/", function(req, res){
    userService.getAllUser().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json("err")
    });
});
// lấy trị của người dùng rồi gửi vào service
// params, query, body
router.post("/sign-up", function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var age = req.body.age;
    var address = req.body.address;
    userService.signup(username, password, age, address)
    .then((result) => {
        res.redirect("/auth/login")
    }).catch((err) => {
        res.redirect("/auth/sign-up")
    });
})
router.post("/login", function(req, res){
    userService.login(req.body).then(function(user){
        if(user){
            return res.status(200).json({
                status: 200,
                message: "Đăng nhập thành công",
                data: user
            })
        }else{
            return res.status(400).json({
                status: 400,
                message: "Sai tài khoản hoặc mật khẩu",
            })
        }
    }).catch(function(err){
        return res.status(500).json({
            status: 500,
            message: "Không thể kết nối server",
            data: err
        })
    })
})



// router.post();

// cachg de goi api cua router 
// ten trong file app.js + ten trong file router
// => api hoan chinh

// /user + / => /user

module.exports = router