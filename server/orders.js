'use strict'

const db = require('APP/db')
const Order = db.model('orders')

module.exports = require('express').Router()
  .post('/', (req, res, next) => {
    Order.create(req.body)
    .then(order => res.status(201).send(order))
    .catch(next)
  })

