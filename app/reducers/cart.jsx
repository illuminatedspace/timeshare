import axios from 'axios'
/* ---------- CONSTANTS ------------ */
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_QUANT = 'UPDATE_QUANT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
/* ----------- REDUCER ------------- */
const initialCartState = {
  quantities: [],
  productIds: [],
}

const reducer = (state = initialCartState, action) => {
    const newState = Object.assign({}, state)

    switch(action.type) {
        case ADD_TO_CART:
            newState.quantities.concat([action.quantities]);
            newState.productIds.concat([action.productIds]);

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
