// Container pulls state and passes state AND METHODS to cart component as props
import React, {Component} from 'react'
import Cart from '../components/Cart'
import Product from '../components/Product'
import { connect } from 'react-redux'

class CartContainer extends Component {
    constructor (props) {
        super(props)
        this.state = Object.assign({}, this.props.cart)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
// TODO: handles info typed into quantity box
    handleChange (event) {
        this.setState({cart.quantities: })
    }
// TODO: figure out this flag
    handleCheckout (event) {
        let visible = false
    }
// passes props to Cart and Checkout Components
// TODO: ternary statement for Checkout visibility
    render () {
        return (
            <div>
                <Cart handleChange={this.handleChange} handleCheckout={this.handleCheckout} {...this.props}/>
                
                <Checkout handlehandleSubmit/>
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
        updateQuant: () => {
            dispatch(updateQuant)
        },
        removeProduct: () => {
            dispatch(removeProduct)
        }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)