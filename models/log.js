const Base = require('./base.js');
const knex = require('./knex.js');

class ClueLog extends Base{
    constructor(props = 'clue_log'){
        super(props)
    }

    delClueLog(id){
        return knex(this.table).where('clue_id','=',id).del()
    }
}

module.exports = new ClueLog();

//没理解到