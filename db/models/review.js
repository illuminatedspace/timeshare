'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('review', {
	body: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	rating: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			min: 1,
			max: 5,
		},
	},
})

module.exports = Review
