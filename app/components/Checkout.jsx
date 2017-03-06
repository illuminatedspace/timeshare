import React, { Component } from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'


export default class Checkout extends Component{
  constructor (props) {
    super(props)
    this.state = {
      name:
    }
  }

  render () {
    return (
      <Paper zDepth={1}>
        <h2>Checkout</h2>
        <form onSubmit={props.handleSubmit}>
          <h3>Address Information</h3>
          <TextField
            onChange={props.handleChange}
            floatingLabelText="Full Name"
            errorText="This field is required"
          /><br />
          <TextField
            onChange={props.handleChange}
            floatingLabelText="Address"
            errorText="This field is required"
          /><br />
          <TextField
            onChange={props.handleChange}
            floatingLabelText="Apartment Number"
          /><br />
          <TextField
            onChange={props.handleChange}
            floatingLabelText="City"
            errorText="This field is required"
          /><br />
          <TextField
            onChange={props.handleChange}
            floatingLabelText="State"
            errorText="This field is required"
          /><br />
          <TextField
            onChange={props.handleChange}
            floatingLabelText="Zip Code"
            errorText="This field is required"
          /><br />
        <Divider />
          <h3>Payment Information</h3>
          <TextField
            onChange={props.handleChange}
            floatingLabelText="CCN"
            errorText="This field is required"
          /><br />
          <TextField
            onChange={props.handleChange}
            floatingLabelText="Security Number"
            errorText="This field is required"
          /><br />
          <RaisedButton label="Checkout" primary={true} />
        </form>
      </Paper>
    )
  }
}
