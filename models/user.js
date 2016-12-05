"use strict";

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('User', {
        user_id:{type:DataTypes.INTEGER, primaryKey:true},
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING
    }, { freezeTableName: true ,timestamps:false,});
}