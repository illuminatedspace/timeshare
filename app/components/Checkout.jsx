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
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handlePaymentChange = this.handlePaymentChange.bind(this)
    this.handleSubmit = this.props.handleSubmit.bind(this)
  }

  handleAddressChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name
    console.log('~~~~~~~~~~name', name)

    //we know we're not suppose to edit state, but we didn't have time to put it the other way
    this.state.shippingAddress[name] = value

  }

  handlePaymentChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    //we know we're not suppose to edit state, but we didn't have time to put it the other way
    this.state.payment[name] = value

  }

  render () {
    return (
      <Paper zDepth={3} className="checkout-card">
        <h2>Checkout</h2>
        <form onSubmit={this.props.handleSubmit}>
          <h3>Address Information</h3>
          <TextField
            name="name"
            onChange={this.handleAddressChange}
            floatingLabelText="Full Name"
          /><br />
          <TextField
            name="address"
            onChange={this.handleAddressChange}
            floatingLabelText="Address"
          /><br />
          <TextField
            name="apartmentNumber"
            onChange={this.handleAddressChange}
            floatingLabelText="Apartment Number"
          /><br />
          <TextField
            name="city"
            onChange={this.handleAddressChange}
            floatingLabelText="City"
          /><br />
          <TextField
            name="state"
            onChange={this.handleAddressChange}
            floatingLabelText="State"
          /><br />
          <TextField
            name="zipCode"
            onChange={this.handleAddressChange}
            floatingLabelText="Zip Code"
          /><br />
        <Divider className="divider" style={style} />
          <h3>Payment Information</h3>
          <TextField
            name="ccn"
            onChange={this.handlePaymentChange}
            floatingLabelText="CCN"
          /><br />
          <TextField
            name="securityNumber"
            onChange={this.handlePaymentChange}
            floatingLabelText="Security Number"
          /><br />
          <TextField
            name="expirationDate"
            onChange={this.handlePaymentChange}
            floatingLabelText="Expiration Date"
          /><br />
          <RaisedButton label="Pay Now" primary={true} className="pay-button" type="submit" />
        </form>
      </Paper>
    )
  }
}
