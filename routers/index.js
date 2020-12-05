var router =  require("express").Router();
var path = require("path")
router.get("/sign-up", function(req, res){
    res.sendFile(path.join(__dirname, "../views/signup.html"))
})
router.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "../views/login.html"))
})


module.exports = router