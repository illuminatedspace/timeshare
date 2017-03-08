import React from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import Badge from 'material-ui/Badge'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart'
import addPhoto from 'material-ui/svg-icons/image/add-a-photo'
import Avatar from 'material-ui/Avatar'

//buttons have to be wrapped in a div to fit in iconElementRight

const PrimaryNavBar = (props) => {
  const rightButtons = (
      <div>
        <Link to='/'>
          <FlatButton label="Home"
            style={{
              color: '#81D4FA'
          }} />
        </Link>
        <Avatar src="/karlie-kloss.jpg"/>
        <FlatButton label="Sign In"
        style={{
          color: '#81D4FA'
          }} />
        <FlatButton label="Sign Up"
        style={{
          color: '#81D4FA'
        }} />
        <Link to="/cart">
          <Badge
            badgeContent={props.cart.productIds.length}
            primary={true}
            badgeStyle={{top: 12, right: 12}}
          >
            <IconButton >
              <ActionShoppingCart />
            </IconButton>
          </Badge>
        </Link>
      </div>
)

  return (
  <AppBar
    title="TimeShare"
    iconElementRight={rightButtons}
    className="primnavbar"
    style={{
      backgroundColor: '#311B92',
    }}
  />
)
}

export default PrimaryNavBar
