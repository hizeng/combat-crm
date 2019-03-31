var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user');

router.get('/a',userController.testUsercontroller);

router.get('/b',function(req,res,next){
        console.log("2");
});

module.exports = router;