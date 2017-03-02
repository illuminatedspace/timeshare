'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.model({
	body: {
		type: Sequelize.TEXT,
		allowNull: false,
	}, 
	rating: {
		type: Sequelize.INTEGER.UNSIGNED,
		allowNull: false,
		validate: {
			min: 1,
			max: 5,
		},
	},
	date: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW,
	}
})

module.exports = Review
