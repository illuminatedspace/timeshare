// Container pulls state and passes to product component as props
import React, {Component} from 'react'
import Product from '../components/Product'
import { connect } from 'react-redux'
import reducer from '../reducers/auth'

class ProductContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            quantity: 0,
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
        this.props.addToCart(this.id, this.state.quantity)
        this.setState({
            quantity: 0
        })
    }
// passes handlers to component
    render () {
        return (
            <Product
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                selectedProduct={this.props.selectedProduct}/>
        )
    }
}

// passes local state of container to component
const mapStateToProps = (state) => {
  return {
    selectedProduct: state.products.selected
  }
}
// ADD TO CART is an action creator which should go in product reducer
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart: (id, quantity, price) => {
            dispatch(addToCart(id, quantity, price))
        },
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer)
