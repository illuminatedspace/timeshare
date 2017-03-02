'use strict'

const db = require('APP/db')
const Product = db.model('products')
const Category = db.model('categories')

modules.exports = require('express').Router()
	// Get all categories 
	.get('/', (req, res, next) => {
		Category.findAll({})
		.then((categories) => res.json(categories))
		.catch(next)
	})
	// Get all products by category ID
	.get('/:id', (req, res, next) => {
		Product.findAll({ where: { categoryId: req.params.id } })
		.then((products) => res.json(products))
		.catch(next)
	})