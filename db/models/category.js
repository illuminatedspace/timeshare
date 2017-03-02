'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');
const Product = require('./product');

const Category = db.define('categories', {
    category_name: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
    }
}, {})