const env = process.env.NODE_ENV || 'development';
const Sequelize = require('sequelize');
const config = require('./config.json')[env];

let sequelize = {};

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = {
    sequelize,
    Sequelize
};