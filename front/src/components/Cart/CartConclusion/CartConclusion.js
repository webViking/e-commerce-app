import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'




const cartConclusion = (props) => {
    console.log(props)
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button 
                                className="btn btn-outline-danger text-uppercase mt-3 mb-3 px-5" type="button">Clear</button>
                        </Link>
                        <h5 className="mt-3">
                            <span className="text-title">
                                total:</span>
                            <strong>{" "}$ </strong>
                        </h5>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default cartConclusion