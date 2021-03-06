'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Category = db.define('categories', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
    }
}, {})

module.exports = Category;