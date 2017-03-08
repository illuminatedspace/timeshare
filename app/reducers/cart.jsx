import axios from 'axios'
/* ---------- CONSTANTS ------------ */
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_QUANT = 'UPDATE_QUANT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
/* ----------- REDUCER ------------- */
const initialCartState = {
  quantities: [],
  productIds: [],
  prices: [],
}

const reducer = (state = initialCartState, action) => {
    const newState = Object.assign({}, state)

    switch(action.type) {
        case ADD_TO_CART:
            if (newState.productIds.includes(action.id)) {
                //if this products is already in the cart, need to increment it's quanity
                const index = newState.productIds.indexOf(action.id)
                //slice before and after the target quantity, concat it all together with the target quanity incremented by action.quanity
                //necessary to not mutate the original array
                newState.quantities = newState.quantities.slice(0, index).concat(+newState.quantities[index] + +action.quantity).concat(newState.quantities.slice((index+1), newState.quantities.length))
            } else {
                newState.productIds = newState.productIds.concat([action.id])
                newState.quantities = newState.quantities.concat([action.quantity])
            }
            
            break

        case UPDATE_QUANT:
            //if this products is already in the cart, need to increment it's quanity
            const index = newState.productIds.indexOf(action.id)
            //slice before and after the target quantity, concat it all together with the target quanity incremented by action.quanity
            //necessary to not mutate the original array
            newState.quantities = newState.quantities.slice(0, index).concat(+newState.quantities[index] + +action.quantity).concat(newState.quantities.slice((index+1), newState.quantities.length))
            break

        case REMOVE_PRODUCT:
            const ind = productIds.indexOf(action.id)
            newState.productIds.filter(id => id !== action.id)
            newState.quantities.filter((quantity, i) => i !== ind)
            newState.prices.filter((price, i) => i !== ind)
            break

        default:
            return state
    }
    return newState

}
/* --------- ACTION CREATORS ---------- */
export const addToCart = (id, quantity, price) => ({
    type: ADD_TO_CART,
    id: id,
    quantity: quantity
})

export const updateQuant = (id, quantity) => ({
    type: UPDATE_QUANT,
    id: id,
    quantity: quantity,
})

export const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    id: id
})

/* ---------- EXPORT ------------ */
export default reducer
