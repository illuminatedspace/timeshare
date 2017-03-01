'use strict'

const db = require('APP/db')
const Product = db.model('products')

module.exports = require('express').Router()
    .get('/', function(req, res, next){
        Product.findAll()
        .then(products => res.json(products))
        .catch(next)
        })
    .get('/:id', function(req, res, next){
        Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(next)
        })