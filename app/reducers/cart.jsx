import axios from 'axios'
/* ---------- CONSTANTS ------------ */
const UPDATE_QUANT = 'UPDATE_QUANT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
/* ----------- REDUCER ------------- */
const initialCartState = {
  quantities: [],
  products: [],
  prices: [],
}
const reducer = (state = initialCartState, action) => {
    const newState = Object.assign({}, state)

    switch(action.type) {
        case UPDATE_QUANT:
            newState.quantities = action.quantities
            return newState  

        case REMOVE_PRODUCT:
            newState.products = action.products
            return newState     

        default:
            return state
    }
}
/* --------- ACTION CREATORS ---------- */
