const models = require('../models');
let Get, Post, Put, Delete;
let test = (req, res, next) => {
    let datas = models.User.findAll().then((users) => {
        res.json(users);
    });
}


Get = {
    'Account/:id': (req, res, next) => {
        res.json({ 'name': req.params.id });
    },
    'Accounts': () => {
        console.log();
    },
    'All': test
}

module.exports = {
    Get, Post, Put, Delete
}