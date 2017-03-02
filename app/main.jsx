'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import AppContainer from './containers/AppContainer'
import ProductsContainer from './container/ProductsContainer'
import ProductContainer from './container/ProductContainer'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'


//this is the React.DOM render method
render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="/products" component={ProductsContainer} />
        <Route path="/products/:productId" component={ProductContainer} />
        <IndexRedirect to="/products" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
