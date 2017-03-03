'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'

import ProductsContainer from './containers/ProductsContainer'
import ProductContainer from './containers/ProductContainer'

import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import App from './components/App'

import {fetchProducts} from './reducers/products'

function onProductsEnter() {
  store.dispatch(fetchProducts())
}

//this is the React.DOM render method
render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/products" component={ProductsContainer} onEnter={onProductsEnter}/>
        <Route path="/products/:productId" component={ProductContainer} />
        <IndexRedirect to="/products" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
