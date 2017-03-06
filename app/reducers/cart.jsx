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
            newState.productIds.concat([action.id]) // newState.productIds =    (this stuff)
            newState.quantities.concat([action.quantity]) // see above 
            break

        case UPDATE_QUANT:
            const index = productIds.indexOf(action.id)
            newState.quantities[index] = action.quantity
            break

        case REMOVE_PRODUCT:
            const ind = productIds.indexOf(action.id)
            newState.productIds.filter(id => id !== action.id)  // filter also returns new array, so need 
            newState.quantities.filter((quantity, i) => i !== ind) // a statement of assignment
            break     

        default:
            return state
    }
    return newState

}
/* --------- ACTION CREATORS ---------- */
export const addToCart = (id, quantity) => ({
    type: ADD_TO_CART,
    id: id,                     // es6 object literal syntax to save effort:   id
    quantity: quantity,                                                        //quantity
})

export const updateQuant = (id, quantity) => ({
    type: UPDATE_QUANT,
    id: id,                    // es6, see above -- as you did on line 53
    quantity: quantity,
})

export const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    id
})

/* ---------- EXPORT ------------ */
export default reducer