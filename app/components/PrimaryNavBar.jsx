import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart'

const PrimaryNavRight = () => (
  <div>
    <FlatButton label="Sign In" />
    <FlatButton label="Sign Up" />
    <IconButton><ActionShoppingCart /></IconButton>
  </div>
)

const PrimaryNavBar = () => (
  <AppBar
    title="TimeShare"
    iconElementRight={PirmaryNavRight}
  />
)

export default PrimaryNavBar
