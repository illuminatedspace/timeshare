import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'

  const style = {
    marginTop: 20,
  }


export default class Checkout extends Component{
  constructor (props) {
    super(props)
    this.state = {
      shippingAddress: {
        name: null,
        address: null,
        apartmentNumber: null,
        city: null,
        state: null,
        zipCode: null,
      },
      payment: {
        ccn: null,
        securityNumber: null,
        expirationDate: null,
      },
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleAddressChange (event) {
    const target = event.target
    const value = target.value

    this.setState({
      address: {
        [name]: value
      }
    })
  }

  handlePaymentChange (event) {
    const target = event.target
    const value = target.value

    this.setState({
      payment: {
        [name]: value
      }
    })
  }

//THIS NEEDS TO BE IN CART CONTAINER
//also import processPayment, and submit order action creator from order reducer
  handleSubmit (event) {
    event.preventDefault()
    let status = this.props.storeOrder(this.state.shippingAddress)
    this.setState({
      payment: {
        ccn: null,
        securityNumber: null,
        expirationDate: null,
      }
    })
  }

  render () {
    return (
      <Paper zDepth={1} className="checkout-card">
        <h2>Checkout</h2>
        <form onSubmit={this.props.handleSubmit}>
          <h3>Address Information</h3>
          <TextField
            onChange={this.handleChange}
            floatingLabelText="Full Name"
          /><br />
          <TextField
            onChange={this.handleChange}
            floatingLabelText="Address"
          /><br />
          <TextField
            onChange={this.handleChange}
            floatingLabelText="Apartment Number"
          /><br />
          <TextField
            onChange={this.handleChange}
            floatingLabelText="City"
          /><br />
          <TextField
            onChange={this.handleChange}
            floatingLabelText="State"
          /><br />
          <TextField
            onChange={this.handleChange}
            floatingLabelText="Zip Code"
          /><br />
        <Divider className="divider" style={style} />
          <h3>Payment Information</h3>
          <TextField
            onChange={this.handleChange}
            floatingLabelText="CCN"
          /><br />
          <TextField
            onChange={this.handleChange}
            floatingLabelText="Security Number"
          /><br />
          <TextField
            onChange={this.handleChange}
            floatingLabelText="Expiration Date"
          /><br />
          <RaisedButton label="Pay Now" primary={true} className="pay-button"/>
        </form>
      </Paper>
    )
  }
}
