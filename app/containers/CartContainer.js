// Container pulls state and passes state AND METHODS to cart component as props
import React, {Component} from 'react'
import { connect } from 'react-redux' 

//import { fetchProductbyId } from '../reducers/products'
import Cart from '../components/Cart'
import { updateQuant, removeProduct } from '../reducers/cart'

class CartContainer extends Component {
    constructor (props) {
        super(props)
        //not sure why we're putting the store's state from props onto the local state
        //this.state = Object.assign({}, this.props.cart)
        this.handleChange = this.handleChange.bind(this)
        this.handleCheckout = this.handleCheckout.bind(this)
    }

    // componentDidMount() {

    // }
    // TODO: handles info typed into quantity box
    handleChange (event) {
    //     this.setState({event.target.value})
    }
    // TODO: figure out this flag
    handleCheckout (event) {
    //     let checkout = false
    }
    // passes props to Cart and Checkout Components
    // TODO: ternary statement for Checkout visibility
    render () {
        console.log('inside CartCotainer, props=', this.props)
        //get products info from products on the srote's state based on productIds currently in the cart
        return (
            <div>
                <Cart 
                    handleChange={this.handleChange} 
                    handleCheckout={this.handleCheckout} 
                    handleUpdate={this.props.updateQuant} 
                    productsInCart={this.props.productsInCart}
                    cart={this.props.cart} />
                {}
                {/*<Checkout handleSubmit={handleSubmit}/>*/}
            </div>
        )
    }
}

// passes local state of container to container and components
const mapStateToProps = (state) => {
    const productsInCart = state.products.products.filter((product) => state.cart.productIds.includes(product.id))

    return {
        cart: state.cart,
        productsInCart: productsInCart
    }
}

// ADD TO CART is a dispatcher which should go in product reducer
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateQuant: (id, q) => {
            dispatch(updateQuant(id, q))
        },
        removeProduct: (id) => {
            dispatch(removeProduct(id))
        },
        // we've decided not to fetch product's info again for now...
        // fetchProductById: (id) => {
        //     dispatch(fetchProductById(id))
        // },
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)