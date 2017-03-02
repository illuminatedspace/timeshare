// Components receive props from containers and render
import React from 'react';
import {Link} from 'react-router'

export default function Products (props) {

  const products = props.products
  // COMPLETELY unstyled render of product list
  return (
    <div>
      <h2>Products</h2>
      <div>
        {
          products && products.map(product => (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.photo}/>
                <div>
                  <h3>
                    <span>{product.name}</span>
                  </h3>
                  <p>{product.description}</p>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}