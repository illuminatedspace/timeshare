import axios from 'axios'
import cartState from './cart'
/* ---------- CONSTANTS ------------ */
const PROCESS_PAYMENT = 'PROCESS_PAYMENT'
const SUBMIT_ORDER = 'SUBMIT_ORDER'
/* ----------- REDUCER ------------- */
const initialOrderState = {
  status: 'unconfirmed',
  shippingAddress: {},
  cart: {},
}

const reducer = (state = initialOrderState, action) => {

    switch (action.type) {
        case PROCESS_PAYMENT:
            newState = Object.assign({}, state, {status: 'paid'})
            break

        case SUBMIT_ORDER:
            newState = Object.assign({}, state, {shippingAddress: action.shippingAddress, status: 'created'})
            break

        default:
            return state
    }
    return newState

}
/* --------- ACTION CREATORS ---------- */
export const processPayment = (payment) => ({
    type: PROCESS_PAYMENT,
    ccn: payment.ccn,
    securityNumber: payment.securityNumber,
    expirationDate: payment.expirationDate,
})

export const submitOrder = () => ({
    type: SUBMIT_ORDER,
    cart: {},
})

/* --------- ASYNC ACTION CREATORS ---------- */
export const storeOrder = (address, cart) =>
    dispatch => {

        axios.post('/api/orders', cart)
        // .then(() => dispatch(submitOrder()))
        .catch(console.error)
    }

/* ---------- EXPORT ------------ */
export default reducer
