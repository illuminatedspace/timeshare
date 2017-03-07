import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products').default,
  cart: require('./cart').default,
  order: require('./order').default,
})

export default rootReducer
