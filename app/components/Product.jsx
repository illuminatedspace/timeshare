// Receives props from ProductContainer
import React from 'react';

export default Product = (props) => {

    const product = props.selectedProduct
// renders selected product & allows user to add chosen quantity to cart
    return (
        <div>
            <div className="floating card">
                <h2>{ product.title }</h2>
                <img src={ product.photo } />
                <p>{ product.description }</p>
                <p>{ product.price }</p>
                <form onSubmit={props.handleSubmit}>
                    <label for="quantity">Quantity</label>
                    <input type="number" name="quantity" id="quantity" onChange={props.handleChange} />
                    <button type="submit">Add to Cart</button>
                </form>
            </div>
        </div>
    )
}