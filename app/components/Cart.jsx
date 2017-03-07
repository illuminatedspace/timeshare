// Receives props from CartContainer
import React from 'react';

const Cart = (props) => {

    const quantities = props.cart.quantities
    const productIds = props.cart.productIds
    const products = props.productsInCart
    //right now we don't have prices on the state
    //const prices = props.cart.prices

    console.log('inside Cart component, props=', props)

    // renders selected product & allows user to add chosen quantity to cart
    // TODO: total, remove button, update quant button
    return (
        <div>
            <div>
                <h2>Cart</h2>
                <form onSubmit={props.handleSubmit}>
                    <ul>
                        {
                            products && products.map(function(element, i) {
                                return (
                                    <li key={products[i].id}> {products[i].title} ${products[i].price} {/*prices[i]*/}
                                        <input type="number" name="quantity" id="quantity" value={quantities[i]} min="1" max="5" onChange={props.handleChange}/>   
                                    </li>)
                            })
                        }
                    </ul>
                    <button type="submit" onSubmit={props.handleUpdate}>Update</button>
                </form>
                <button type="submit">Checkout</button>   
            </div>
        </div>
    )
}

export default Cart