import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../redux/storage/actions/index'
import styled from 'styled-components'
const CartItem = (props) => {
    console.log(props)
    const { price, title } = props.item
    let checkInCart = null
    if (props.item) {
        checkInCart = (
            <div className="row mt-5">

                <div className="mx-auto col-lg-2 ml-5 col-10  col-md-5 my-3">
                    <p className="text-uppercase bold" >{title}</p>
                </div>

                <div className="mx-auto col-lg-2 col-md-5 my-3">
                    <p className="text-uppercase bold">{price}</p>
                </div>

                <div className="mx-auto col-lg-2 col-md-5 my-3">
                    <HoverEffect>
                    <div className="cart-icon" onClick={props.onRemoveEl.bind(this, props.item.id)}>
                        <i className="fas fa-trash"></i>
                    </div>
                    </HoverEffect>
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
const HoverEffect = styled.div`
    &:hover{
     cursor: pointer;
    }
`
const mapDispatchToProps = dispatch => {
    return {
        onRemoveEl: (el) => dispatch(actions.removeElFromCart(el))
    }
}
export default connect(null, mapDispatchToProps)(CartItem)
