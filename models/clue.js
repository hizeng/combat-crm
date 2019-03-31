const Base = require("./base.js");

const knex = require('./knex');


class Clue extends Base{
    constructor(props = 'clue'){
        super(props);
    }

    joinUser(params={}){
        return knex('clue')
        .leftJoin('user','clue.user_id','=','user.id')
        .select(
            'clue.id',
            'clue.name',
            'clue.phone',
            'clue.utm',
            'clue.status',
            'clue.created_time',
            {'sales_name':'user.name'},
            ).where(params)
    }
    // delClue(params){
    //      return knex('clue')
    //      .join('clue_log','clue.id','=','clue_log.clue_id')
    //      .select(
    //         'clue.id',
    //         'clue.name',
    //         'clue.phone',
    //         'clue.status',
    //         'clue.created_time',
    //         {'clue_logs.id':'clue_log.id'},
    //         {'clue_content':'clue_log.content'}
    //         ).where({'clue.id':params.id})
    // }
}


module.exports = new Clue();

