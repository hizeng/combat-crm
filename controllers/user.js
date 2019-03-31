const User = require('./../models/user.js');
const Clue = require('./../models/clue.js');
const { formatTime } = require('./../utils/date.js');
const userController = {
  insert: async function(req,res,next){
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    let role = req.body.role;
    let created_time = new Date();
    if(!name || !phone || !password || !role){
      res.json({ code: 0, message: '缺少必要参数' });
      return
    }

    try{
      const users = await User.insert({ 
        name, phone, password, role, created_time
      });
      res.json({ 
        code: 200, 
        data: users
      })
    }catch(e){
      console.log(e)
      res.json({ 
        code: 0,
        message: '内部错误'
      })
    }
  },
  show: async function(req,res,next){
    try{
      const users = await User.all();
      res.locals.users = users.map((data)=>{
        data.role_display = ( data.role == 1 ) ? '管理员' : '销售';
        data.created_time_display = formatTime(data.created_time);
        return data
      });

      // console.log(res.locals);

      res.render('admin/user.tpl',res.locals)
    }catch(e){
      res.locals.error = e;
      res.render('error',res.locals);
    }
  },
  delUser:async function(req,res,next){
    let id = req.body.id;

    try{

      const user = await User.delete(id);

      await Clue.select({user_id:id}).update({user_id:null})

      res.json({code:200,message:'success'})

    }catch(e){
      console.log(e);
      res.json({code:0})
    }

  },
  edit: async function(req,res,next) {
    try{
      const id = req.params.id;
      const users = await User.select({ id })
      res.locals.user = users[0]
      res.render('admin/user_edit.tpl',res.locals)
    }catch(e){
      res.locals.error = e;
      res.render('error',res.locals);
    }
  },
  update: async function(req,res,next) {
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    let role = req.body.role;
    let id = req.params.id;
    
    if(!name || !phone || !password || !role){
      res.json({ code: 0, message: '缺少必要参数' });
      return
    }

    try{
      const users = await User.update( id ,{ 
        name, phone, password, role
      });
      res.json({ 
        code: 200, 
        data: users
      })
    }catch(e){
      console.log(e)
      res.json({ 
        code: 0,
        message: '内部错误'
      })
    }
  },
  renderUserCreate: function(req,res,next) {
    res.render('admin/user_create');
  },
  testUsercontroller:async function(req,res,next){
    res.redirect('http://www.baidu.com');
  }
}

module.exports = userController;