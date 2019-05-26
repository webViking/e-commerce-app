import React from 'react'
import CartItem from './CartItem/CartItem'

const CartList = (props) => {

    return (
        <div className="container-fluid">
            {props.data.products.map(item => {
                return <CartItem  count ={item.count} key={item.id} item={item} />
            })
            }
        </div>
    )
}



export default CartList

