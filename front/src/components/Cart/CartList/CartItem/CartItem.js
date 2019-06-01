import React from 'react'
//import { connect } from 'react-redux'

const CartItem = (props) => {
    console.log(props)
    const {  price, title } = props.item
    let checkInCart = null
    if (props.item) {
        checkInCart = (
            <div className="row mt-5">

                <div className="mx-auto col-lg-2 ml-5">
                    <p className="text-uppercase">{title}</p>
                </div>

                <div className="mx-auto col-lg-2">
                    <p className="text-uppercase">{price}</p>
                </div>

                <div className="mx-auto col-lg-2">
                    
                    <div className="cart-icon">
                        <i className="fas fa-trash"></i>
                    </div>
                   
                </div>

                <div className="mx-auto col-lg-2">
                    <p className="text-uppercase">{price}</p>
                </div>
            </div>
        
        )
    } else {
        checkInCart = null
    }
    return (
        <React.Fragment>
            {checkInCart}
        </React.Fragment>
    )
}



export default (CartItem)
