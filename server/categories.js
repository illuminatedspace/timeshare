'use strict'

const db = require('APP/db')
const Category = db.model('categories')
const Product = db.model('products')

module.exports = require('express').Router()
    // list all categories
    .get('/', function(req, res, next) {
        Category.findAll({})
            .then((categories) => res.json(categories))
            .catch(next)
    })
    // view products in one category
    .get('/:id', function(req, res, next) {
        Products.findAll({ where: { categoryId: req.params.id } })
            .then((products) => res.json(products))
            .catch(next)
    })