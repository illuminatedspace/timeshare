import React, {Component} from 'react'
import { connect } from 'react-redux'

import PrimaryNavBar from '../components/PrimaryNavBar'
import SubNavBar from '../components/SubNavBar'

//import AdminNav from '../components/AdminNav'

class NavBarContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <PrimaryNavBar cart={this.props.cart}/>
        <SubNavBar />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    cart: state.cart,
  }
}

export default connect(
  mapStateToProps,
)(NavBarContainer)