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
// handles info typed into quantity box
    handleChange (event) {
        this.setState({cart.quantities: event.target.value})
    }

// 

// passes props to Cart and Checkout Components
    render () {
        return (
            <div>
                <Cart handleChange={this.handleChange} handleCheckout={this.handleCheckout} {...this.props}/>
                <Checkout handlehandleSubmit/>
            </div>
        )
    }
}
// passes local state of container to components
const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
// ADD TO CART is a dispatcher which should go in product reducer
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateCart: () => {
            dispatch(updateCart)
        },
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer)