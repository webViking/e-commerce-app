import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

import * as actions from '../../../redux/storage/actions/index' 
import {connect} from 'react-redux'


const cartConclusion = (props) => {

 
      let total = 0
      for( let i = 0; i < props.cartList.length; i++){
        total = total + props.cartList[i].price
      }
     

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button 
                                className="btn btn-outline-danger text-uppercase mt-3 mb-3 px-5" onClick = {props.onClearCart} type="button">Wyczysc</button>
                        </Link>
                        <Link to="/summary">
                            <button 
                                className="btn btn-outline-primary text-uppercase mt-3 mb-3 px-5 ml-2" type="button">Dalej</button>
                        </Link>
                        <h5 className="mt-3">
                            <span className="text-title">
                                Cena:</span>
                            <strong>{" "} {total} PLN </strong>
                        </h5>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
const mapStateToProps = (state)=>{
    return{
        cartList: state.products.cart
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onClearCart: ()=> dispatch(actions.clearCart())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(cartConclusion)