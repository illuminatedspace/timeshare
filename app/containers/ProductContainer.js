// Container pulls state and passes to product component as props
import React, {Component} from 'react'
import Product from '../components/Product'
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
  return {
    selectedProduct: state.product.selected
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleChange: () => {
            dispatch(handleChange)
        },
        handleSubmit: () => {
            dispatch(handleSubmit)
        }
    }
}
const productContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)

export default productContainer