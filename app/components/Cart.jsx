// Receives props from CartContainer
import React from 'react';

const Cart = (props) => {

    const quantities = props.cart.quantities
    const products = props.cart.products
    const prices = props.cart.prices
// renders selected product & allows user to add chosen quantity to cart
// TODO: total, remove button, update quant button
    return (
        <div>
            <div>
                <h2>Cart</h2>
                <form onSubmit={props.handleSubmit}>
                    <ul>
                        {products && products.forEach(function(element, i) {
                                return (
                                <li>{quantities[i]} {products[i]} {prices[i]}</li>
                                <input type="number" name="quantity" id="quantity" onChange={props.handleChange} />
                                <button>
                                )
                            })
                        }
                    </ul>
                </form>
                <button type="submit">Checkout</button>   
            </div>
        </div>
    )
}

export default Cart