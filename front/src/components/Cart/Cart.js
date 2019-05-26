import React, { Component } from 'react'
import CartColumns from './CartColumns/CartColumns'
import CartList from './CartList/CartList'
import CartEmpty from './CartEmpty/CartEmpty'
import CartConclusion from './CartColumns/CartColumns'
export class Cart extends Component {
  render() {
    let checkWhetherCartIsEmpty = null
    if(1>0){
      checkWhetherCartIsEmpty = (
        <React.Fragment>
            <CartColumns />
            <CartList/>
            <CartConclusion/>
        </React.Fragment>
      )
    }else{
      checkWhetherCartIsEmpty = (
      <React.Fragment>
        <CartEmpty/>
      </React.Fragment>
      )
    }
    return (
      <div className = "py-5 mt-5">
        <h1>Cart!</h1>
        {checkWhetherCartIsEmpty}
      </div>
    )
  }
}

export default Cart
