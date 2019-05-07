import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/storage/actions/index'
//import Product from './Product/Product'

export class ProductList extends Component {
  state = {
    searchString: ""
  }
  componentDidMount() {
    this.props.onFetchProducts()
  }


  render() {
    console.log(this.props.productsList)
    return (
      <div className="mt-5">
        <h1>Hello!</h1>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    productsList: state.products.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(actions.fetchProducts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
