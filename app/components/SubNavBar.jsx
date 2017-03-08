import React from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import CategoriesContainer from '../containers/CategoriesContainer';

const leftButtons = (
    <div className="left-elements-wrapper">
        <CategoriesContainer/>
    </div>
)

const SubNavBar = () => (
      <AppBar iconElementLeft={leftButtons}
      className="subnavbar"
      style={{
      backgroundColor: '#4527A0',
    }}/>
)

export default SubNavBar
