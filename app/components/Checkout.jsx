import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'


export default class Checkout extends Component{
  constructor (props) {
    super(props)
    this.state = {
      name: null,
      address: null,
      apartmentNumber: null,
      city: null,
      state: null,
      zipCode: null,
      ccn: null,
      securityNumber: null,
      expirationDate: null,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const target = event.target
    const value = target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {

  }

  render () {
    return (
      <Paper zDepth={1}>
        <h2>Checkout</h2>
        <form onSubmit={this.props.handleSubmit}>
          <h3>Address Information</h3>
          <TextField
            onChange={this.handleChange}
            floatingLabelText="Full Name"
            errorText="This field is required"
          /><br />
          <TextField
            onChange={this.handleChange}
            floatingLabelText="Address"
            errorText="This field is required"
          /><br />
          <TextField
            onChange={this.handleChange}
            floatingLabelText="Apartment Number"
          /><br />
          <TextField
            onChange={this.handleChange}
            floatingLabelText="City"
            errorText="This field is required"
          /><br />
          <TextField
            onChange={this.handleChange}
            floatingLabelText="State"
            errorText="This field is required"
          /><br />
          <TextField
            onChange={this.handleChange}
            floatingLabelText="Zip Code"
            errorText="This field is required"
          /><br />
        <Divider />
          <h3>Payment Information</h3>
          <TextField
            onChange={this.handleChange}
            floatingLabelText="CCN"
            errorText="This field is required"
          /><br />
          <TextField
            onChange={this.handleChange}
            floatingLabelText="Security Number"
            errorText="This field is required"
          /><br />
          <TextField
            onChange={this.handleChange}
            floatingLabelText="Expiration Date"
            errorText="This field is required"
          /><br />
          <RaisedButton label="Checkout" primary={true} />
        </form>
      </Paper>
    )
  }
}
