import React from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart'

//buttons have to be wrapped in a div to fit in iconElementRight
const rightButtons = (
      <div>
        <FlatButton label="Sign In" />
        <FlatButton label="Sign Up" />
        <Link to="/cart">
          <IconButton>
            <ActionShoppingCart />
          </IconButton>
        </Link>
      </div>
)

const PrimaryNavBar = () => (
  <AppBar
    title="TimeShare"
    iconElementRight={rightButtons}
  />
)

export default PrimaryNavBar
