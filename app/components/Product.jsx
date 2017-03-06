// Receives props from ProductContainer
import React from 'react';

//MATERIAL UI COMPONENTS
//adds a paper card for the component to sit on
import Paper from 'material-ui/Paper'
//the add to cart style button
import RaisedButton from 'material-ui/RaisedButton'
//the add to cart icon
import ActionAddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart'

const Product = (props) => {
    const product = props.selectedProduct
// renders selected product & allows user to add chosen quantity to cart
    return (
        <Paper zDepth={2}>
            <div className="product-card">
                <Paper zDepth={3} className="product-img">
                    <img src={ product.photo } />
                </Paper>
                <div className="product-info">
                    <h2 className="product-name">{ product.title }</h2>
                    <p>{ product.description }</p>
                    <p>${ product.price }</p>
                    <form onSubmit={props.handleSubmit}>
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="number"
                            min="1"
                            value="1"
                            name="quantity"
                            id="quantity"
                            onChange={props.handleChange}
                        />
                        <RaisedButton
                          className="submit"
                          type="submit"
                          label="Add to Cart"
                          labelPosition="before"
                          primary={true}
                          icon={<ActionAddShoppingCart />}
                        />
                    </form>
                </div>
            </div>
        </Paper>
    )
}

export default Product
