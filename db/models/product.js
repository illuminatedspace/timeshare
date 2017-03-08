'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false,
        notEmpty: true,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    inventory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    photo: {
        type: Sequelize.STRING,
        defaultValue: '../../img/hourglass.jpg',
    },
}, {});

module.exports = Product
