// Components receive props from containers and render
import React from 'react';
import {Link} from 'react-router'

//makes a container for the components
import Paper from 'material-ui/Paper'

// const style = {
//   height: 100,
//   width: 100,
//   margin: 20,
// }

export default function Products (props) {

//change to products.all
  const products = props.products.products
  // COMPLETELY unstyled render of product list
  return (
    <div>
      <h1>Takin' time to make time!</h1>
      <div id="dynamic-view">
        <h2>Products</h2>
        <div>
          {
            products.length && products.map(product => (
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
    </div>
  )
}
