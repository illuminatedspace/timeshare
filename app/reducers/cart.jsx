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
            newState.productIds.concat([action.id])
            newState.quantities.concat([action.quantity])
            break

        case UPDATE_QUANT:
            const index = productIds.indexOf(action.id)
            newState.quantities[index] = action.quantity
            break

        case REMOVE_PRODUCT:
            const ind = productIds.indexOf(action.id)
            newState.productIds.filter(id => id !== action.id)
            newState.quantities.filter((quantity, i) => i !== ind)
            break     

        default:
            return state
    }
    return newState

}
/* --------- ACTION CREATORS ---------- */
export const addToCart = (id, quantity) => ({
    type: ADD_TO_CART,
    id: id, 
    quantity: quantity,
})

export const updateQuant = (id, quantity) => ({
    type: UPDATE_QUANT,
    id: id, 
    quantity: quantity,
})

export const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    id
})

/* ---------- EXPORT ------------ */
export default reducer