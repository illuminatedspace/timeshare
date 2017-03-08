// Container pulls state and passes to product component as props
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

import Product from '../components/Product'
import { addToCart } from '../reducers/cart'

class ProductContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            quantity: 1,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
// handles info typed into quantity box
    handleChange (event) {
        this.setState({
            quantity: event.target.value
        })
    }
// handles click of Add to Cart button
    handleSubmit (event) {
        event.preventDefault()
        //passing in 'this' was also floated
        this.props.addToCart(this.props.selectedProduct.id, this.state.quantity)
        //I don't think we need to re-set quantity back to 1. I think it shold stay whatever the user selected.
        // this.setState({
        //     quantity: 1
        // })
    }
// passes handlers to component
    render () {
        return (
            <div>
                <Product
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    selectedProduct={this.props.selectedProduct}
                    quantValue={this.state.quantity}/>
            </div>
        )
    }
}

// passes local state of container to component
const mapStateToProps = (state) => {
  return {
    selectedProduct: state.products.selected
  }
}
// addToCart is an action creator which should go in cart reducer
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart: (id, quantity) => {
            dispatch(addToCart(id, quantity))
        },
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer)
