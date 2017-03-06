// Receives props from ProductContainer
import React from 'react';

//MATERIAL UI COMPONENTS
//adds a paper card for the component to sit on
import Paper from 'material-ui/Paper'

const Product = (props) => {
    const product = props.selectedProduct
// renders selected product & allows user to add chosen quantity to cart
    return (
        <Paper zDepth={1}>
            <div className="floating card">
                <h2>{ product.title }</h2>
                <img src={ product.photo } />
                <p>{ product.description }</p>
                <p>{ product.price }</p>
                <form onSubmit={props.handleSubmit}>
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" name="quantity" id="quantity" onChange={props.handleChange} />
                    <button type="submit">Add to Cart</button>
                </form>
            </div>
        </Paper>
    )
}

export default Product
