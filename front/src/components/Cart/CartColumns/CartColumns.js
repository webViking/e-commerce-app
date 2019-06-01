import React from 'react'

export const CartColumns = () => {
    return (
        //container fluid takes a full screen, normal continer contains a several paddings
        //d-none initailly it doesnt be display 
        //d-lg-block only in bigger screen it will be displayed
        <div className="container-fluid mt-5 text-center d-none d-lg-block">
            <div className="row text-dark">

                <div className="mx-auto col-lg-2">
                    <p className="text-uppercase">name</p>
                </div>

                <div className="mx-auto col-lg-2">
                    <p className="text-uppercase">price</p>
                </div>

                <div className="mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>

                <div className="mx-auto col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>

            </div>
        </div>
    )
}
export default CartColumns