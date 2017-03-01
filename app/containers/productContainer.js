'use strict'

import React, {Component} from 'react'
import Products from '../components/Products';
import { connect } from 'react-redux';

export default class productsContainer {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.list
  };
};

const productsContainer = connect(
  mapStateToProps
)(Products);

export default productsContainer;