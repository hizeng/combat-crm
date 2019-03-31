const authMiddleware = {
    mustLogin:function(req,res,next){
        if(!res.locals.isLogin){
            res.redirect('/admin/login')
            return
        }
        next();
    },
    mustRoot:function(req,res,next){
        if(res.locals.userInfo.role !=1){
            // console.log(res.locals.userInfo);
            // res.writeHead(403);
            // res.end("403 Forbidden");
            // return 
            res.redirect('/admin/clue')
            return
        }
        next();
    }

}

module.exports = authMiddleware;