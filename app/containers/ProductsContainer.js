// Container pulls state and passes to component as props
import Products from '../components/Products'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const productsContainer = connect(
  mapStateToProps
)(Products)

export default productsContainer