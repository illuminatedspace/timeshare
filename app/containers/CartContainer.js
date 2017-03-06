// Container pulls state and passes state AND METHODS to cart component as props
import React, {Component} from 'react'
import Cart from '../components/Cart'
import { connect } from 'react-redux'
import { fetchProductbyId } from '../reducers/products'
import { updateQuant, removeProduct } from '../reducers/cart'

class CartContainer extends Component {
    constructor (props) {
        super(props)
        this.state = Object.assign({}, this.props.cart)
        this.handleChange = this.handleChange.bind(this)
        this.handleCheckout = this.handleCheckout.bind(this)
    }

    componentDidMount() {

    }
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
        return (
            <div>
                <Cart
                handleChange={this.handleChange}
                handleCheckout={this.handleCheckout}
                handleUpdate={this.props.updateQuant}
                {...this.props}/>
                {}
                {/*<Checkout handleSubmit={handleSubmit}/>*/}
            </div>
        )
    }
}
// passes local state of container to container and components
const mapStateToProps = (state) => {
  return {
    cart: state.cart
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
        fetchProductById: (id) => {
            dispatch(fetchProductById(id))
        },
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
