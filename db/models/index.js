'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')

const Review = require('./review')
const Product = require('./product')
const Category = require('./category')
const Order = require('./order')

OAuth.belongsTo(User)
User.hasOne(OAuth)
Product.belongsTo(Category)
Category.hasMany(Product)
Review.belongsTo(User)
User.hasMany(Review)

module.exports = {User, Category, Product, Review}
