import React, { Fragment } from 'react'
//import { connect } from 'react-redux'

const CartItem = (props) => {
    

    let checkInCart = null
    if (props.item.inCart) {
        checkInCart = (
            <div className="row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={`../${props.item.img}`} style={{ width: '5rem', height: '5rem' }} className="img-fluid" alt="" />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Product:</span>
                    {" "}{props.item.title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Price:</span>
                    {" "}{props.item.price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            
                                <Fragment>
                                    <button className="btn btn-black mx-1">-</button>
                                    <span className="btn btn-black mx-1"></span>
                                    <button className="btn btn-black mx-1">+</button>
                                </Fragment>
                                
                                <Fragment>
                                    <span className="btn btn-black mx-1">-</span>
                                    <span className="btn btn-black mx-1"></span>
                                    <span className="btn btn-black mx-1">+</span>
                                </Fragment>
                            

                        </div>
                    </div>
                </div>
                {/* */}
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon">
                        <i className="fas fa-trash"></i>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2" >
                    <strong>item total: $ </strong>
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
