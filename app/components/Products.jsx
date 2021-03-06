// Components receive props from containers and render
import React from 'react';
import {Link} from 'react-router'

import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

export default function Products (props) {

//change to products.all
  const products = props.products.products
  return (
    <div>
      <Divider />
      <div>
        <h2>Products</h2>
        <div className="products">
          {
            products.length && products.map(product => (
              <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <Paper zDepth={2} className="product-card" style={{background: '#EEEEEE'}}>
                    <Paper zDepth={3} className="product-img">
                      <img src={product.photo} />
                    </Paper>
                    <div className="product-info">
                      <h3 className="product-name">
                        <span>{product.title}</span>
                      </h3>
                      <p>{product.description}</p>
                      <span className="product-price">$ {product.price}</span>
                    </div>
                  </Paper>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
