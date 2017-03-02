// Receives props from ProductContainer
import React from 'react';

const Product = (props) => {

    const product = props.selectedProduct
// renders selected product & allows user to add chosen quantity to cart
    return (
        <div>
            <div className="floating card">
                <h2>{ product.title }</h2>
                <img src={ product.photo } />
                <p>{ product.description }</p>
                <p>{ product.price }</p>
                <form>
                    <label for="quantity">quantity</label>
                    <input type="number" name="quantity" id="quantity" onChange={} />
                    <button type="submit" onSubmit={}>Add to Cart</button>
                </form>
            </div>
        </div>
    )
}