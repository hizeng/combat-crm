const knex = require('./knex');

class Base{
    constructor(props){
        this.table = props;
    }

    all(){
        return knex(this.table).select()    //获取所有
    }

    select(params){
        return knex(this.table).select().where(params)  //查询
    }

    insert(params){
        return knex(this.table).insert(params)      //插入 添加
    }

    update(id,params){
        return knex(this.table).where('id','=',id).update( params ) //更新
    }

    delete(id){                                     
        return knex(this.table).where('id','=',id).del()   //删除
    }
}

module.exports = Base;