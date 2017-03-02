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