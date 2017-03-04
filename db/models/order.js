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
    status: {
        type: Sequelize.ENUM,
        values: ['created', 'processing', 'cancelled', 'completed'],
        defaultValue: 'created',
        allowNull: false,
    },
    // Virtual property to return array of item objects [{productId: ___, quantity: ___, price: ___}] built from 3 item info arrays
    items: {
        type: Sequelize.VIRTUAL,
        get: function() {
            var orderItems = []
            var products = this.getDataValue('products')
            var quantities = this.getDataValue('quantities')
            var prices = this.getDataValue('prices')
            products.forEach((productId, i) => {
                orderItems.push({
                    productId: productId, 
                    quantity: quantities[i],
                    price: prices[i],
                })
            })
            return orderItems;
        }
    }
}, {
    validate: {
        // Check that there are the same number of items in prices, quantities, and products so indices match 
        // i.e. at index: price[index], quantity[index] and product[index] are for the same order item
        arraysAreSameLength: function() {
            // If one of the arrays does not exist, validation fails to avoid undefineds
            if(!this.products || !this.prices || !this.quantities) return false 
            // If all the lengths are equal, valid!
            if((this.products.length === this.prices.length) && (this.prices.length === this.quantities.length)) {
                return true
            } else { // If lengths are not equal, throw error
                throw new Error('Array lengths are not equal. Order item index not consistent across prices, quantities, products arrays.')
            }
        }
    }, 
});