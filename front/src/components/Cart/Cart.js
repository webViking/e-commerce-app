import React, { Component } from 'react'

import { connect } from 'react-redux'
import CartColumns from './CartColumns/CartColumns'
import CartList from './CartList/CartList'
import CartEmpty from './CartEmpty/CartEmpty'
import CartConclusion from '../Cart/CartConclusion/CartConclusion'
import { Link } from 'react-router-dom'
export class Cart extends Component {
  render() {
    console.log(this.props.cartList)
    let checkWhetherCartIsEmpty = null
    if (this.props.cartList.length > 0) {
      checkWhetherCartIsEmpty = (
        <React.Fragment>
          <CartColumns />
          <CartList products={this.props.cartList} />
          <CartConclusion />
        </React.Fragment>
      )
    } else {
      checkWhetherCartIsEmpty = (
        <React.Fragment>
          <Link to="/">
            <CartEmpty />
          </Link>
        </React.Fragment>
      )
    }
    return (
      <div className="container-fluid mt-5 text-center  d-lg-block pt-5 px-auto">
        {checkWhetherCartIsEmpty}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cartList: state.products.cart,
  }
}

export default connect(mapStateToProps)(Cart)
