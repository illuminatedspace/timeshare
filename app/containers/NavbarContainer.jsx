import React, {Component} from 'react'
import { connect } from 'react-redux'

import PrimaryNavBar from '../components/PrimaryNavBar'
import SubNavBar from '../components/SubNavBar'
import Categories from './CategoriesContainer'
import {deepPurple900} from 'material-ui/styles/colors'
//import AdminNav from '../components/AdminNav'

class NavBarContainer extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <PrimaryNavBar />
        <SubNavBar />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(NavBarContainer)