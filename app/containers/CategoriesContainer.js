import React, {Component} from 'react'
import { Link } from 'react-router'

import Categories from '../components/Categories'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}
const categoriesContainer = connect(
  mapStateToProps
)(Categories)

export default categoriesContainer