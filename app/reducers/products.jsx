import axios from 'axios'

const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'

const initialProductsState = {
  products: [],
  selected: {}
}

const reducer = (state = initialProductsState, action) => {
    const newState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_PRODUCTS:
            newState.products = action.products
            return newState  

        case RECEIVE_PRODUCT:
            newState.selected = action.product
            return newState     

        default:
            return state
    }

}

// Action Creators
// async action creator; fetches products from the DB
// will probably be used inside onEnter `products` route
export const fetchProducts = () =>
  dispatch =>
    axios.get('/api/products')
      .then(response => {
        const products = response.data
        dispatch(receiveProducts(products))
      })
      .catch(console.error.bind(console))

export const fetchProductById = (productId) =>
  dispatch =>
    axios.get(`/api/products/${productId}`)
      .then(response => {
        const product = response.data
        dispatch(receiveProduct(product))
      })
      .catch(console.error.bind(console))

// sync action creator, reducer will put received products on the state
export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS, products
})

// sync action creator, reducer will put received product on the state as `selected`
export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT, product
})

export default reducer
