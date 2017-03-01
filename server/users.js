'use strict'

const db = require('APP/db')
const User = db.model('users')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
	//lists all users, only for admins
	.get('/', forbidden('only admins can list users'), (req, res, next) =>
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
	//creates a user, will check for an existing user first
	.post('/', (req, res, next) => {
		User.findOne( { where: { email: req.body.email} })
		.then(user => {
			if (user) {
				let err = new Error('Email is already associated with an account');
				err.status = 400;
				return next(err);
			}
			else {
				return User.create(req.body)
			}
		})
		.then( user => res.status(201).json(user))
		.catch(next)
	})
	//gets a single user
	.get('/:id', mustBeLoggedIn, (req, res, next) =>
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))
