module.exports = function(app){
    app.use(require('./initFilter.js'))

    app.use(require('./loginFilter.js'));
};