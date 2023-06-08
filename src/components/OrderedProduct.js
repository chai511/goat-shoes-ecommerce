import React from 'react'
import './CheckoutProduct.css'

function OrderedProduct({ id, pic, name, price, cartAction,count }) {
    return (
            <article>
            <img className="checkoutProduct__image" src={pic} alt="" />
            <div className='text'>
            <p className="checkoutProduct__title">{name}</p>
            <p  className="checkoutProduct__price"><small>₹</small><strong>{price}</strong></p>
            <p  className="checkoutProduct__price">Orders:<strong>{count}</strong></p>
            </div>
            </article>
    )
}

export default OrderedProduct

