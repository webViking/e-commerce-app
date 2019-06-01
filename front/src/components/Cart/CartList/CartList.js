import React from 'react'
import CartItem from './CartItem/CartItem'

const CartList = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            {props.products.map(item => {
                return <CartItem  key={item.id} item={item} />
            })
            }
        </React.Fragment>
    )
}



export default CartList

