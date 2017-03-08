// Receives props from CartContainer
import React from 'react';

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/FlatButton'

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
        <Paper zDepth={1} className="cart-card">
            <h2>Cart</h2>
            <form onSubmit={props.handleSubmit}>
                <ul>
                    {products && products.map(function(element, i) {
                            return (
                                <li key={products[i].id}> {products[i].title} ${products[i].price}
                                    <input type="number" name="quantity" id="quantity" value={quantities[i]} min="1" max="5" onChange={props.handleChange}/>
                                </li>)
                        })
                    }
                </ul>
                <RaisedButton type="submit" onSubmit={props.handleUpdate} secondary={true} label="Update" />
            </form>
            <RaisedButton type="submit" label="Checkout" primary={true} />
        </Paper>
    )
}

export default Cart
