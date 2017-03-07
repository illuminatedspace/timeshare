'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import store from './store'

import ProductsContainer from './containers/ProductsContainer'
import ProductContainer from './containers/ProductContainer'
import CartContainer from './containers/CartContainer'

// import Login from './components/Login'
// import WhoAmI from './components/WhoAmI'
import App from './components/App'

import {fetchProducts, fetchProductById} from './reducers/products'

function onProductsEnter() {
  store.dispatch(fetchProducts())
}

// do we really need to go fetch this info again? Maybe to get reviews....
function onProductEnter(nextRouterState) {
  const productId = nextRouterState.params.productId;
  store.dispatch(fetchProductById(productId))
};

//this is the React.DOM render method
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/products" component={ProductsContainer} onEnter={onProductsEnter} />
        <Route path="/products/:productId" component={ProductContainer}  onEnter={onProductEnter} />
        <Route path="/cart" component={CartContainer} />
        <IndexRedirect to="/products" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
