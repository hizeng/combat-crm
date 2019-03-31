var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user');
var authController = require('./../controllers/auth.js');
var clueController = require('./../controllers/clue');

router.post('/user' , userController.insert);
router.put('/user/:id' , userController.update);
router.post('/login' , authController.login);

router.post('/clue',clueController.insert);

router.post('/clueBySeft',clueController.insertBySeft);//销售员增加用户

router.put('/clue/:id',clueController.update);

router.post('/clue/:id/log',clueController.addLog); //线索记录

router.get('/signout',authController.signout);//退出登录

router.delete('/delClue',clueController.delClue);//删除线索

router.delete('/delClueLog',clueController.delClueLog);//删除线索记录

router.delete('/delUser',userController.delUser);//删除管理员（销售）

module.exports = router;

//1.router 可以看成一个实例对象 
//2.module.exprots 的理解 
