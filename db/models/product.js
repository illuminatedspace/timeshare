'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
    title: {
        type: Sequelize.STRING,
        notEmpty: true,
    },
    description:{
        type: Sequelize.TEXT,
        notEmpty: true,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    inventory: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    photo: {
        type: Sequelize.STRING,
        defaultValue: 'https://pixabay.com/photo-1752164/',
    },
    category: {
        type: Sequelize.STRING,
        notEmpty: true,
    },
}, {});

module.exports = Product
