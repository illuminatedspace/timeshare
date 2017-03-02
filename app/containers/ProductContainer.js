// Container pulls state and passes to product component as props
import React, {Component} from 'react'
import Product from '../components/Product'
import { connect } from 'react-redux'
import reducer from '../reducers/auth';

class ProductContainer extends Component {
    constructor () {
        super()
        this.state = {
            quantity: 0,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
// handles info typed into quantity box
    handleChange (event) {
        this.setState({quantity: event.target.value})
    }
// handles click of Add to Cart button
    handleSubmit (event) {
        event.preventDefault()
        this.props.addToCart(this.state.quantity)
        this.setState({quantity: 0})
    }
// passes handlers to component
    render () {
        <Product handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    }
}
// passes local state of container to component
const mapStateToProps = (state) => {
  return {
    selectedProduct: state.product.selected
  }
}
// ADD TO CART is a dispatcher which should go in product reducer
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart: () => {
            dispatch(addToCart)
        },
    }
}
const productContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)

export default productContainer