'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define({
    products: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false, 
        isArray: true,
    },
    prices: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
        isArray: true,
    },
    quantities: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
        isArray: true,
    },
    status: { // “Created”/ “Processing”/ “Cancelled”/ “Completed”
        type: Sequelize.ENUM,
        values: ['created', 'processing', 'cancelled', 'completed'],
        defaultValue: 'created',
        allowNull: false,
    }
}, {
    validate: {
        // Check that there are the same number of items in prices, quantities, and products so indices match 
        // i.e. at index: price[index], quantity[index] and product[index] are for the same order item
        arraysAreSameLength: function() {

        }
    }
});