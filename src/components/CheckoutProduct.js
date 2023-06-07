import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ id, pic, name, price, cartAction }) {
    return (
            <article>
            <img className="checkoutProduct__image" src={pic} alt="" />
            <div className='text'>
            <p className="checkoutProduct__title">{name}</p>
            <p  className="checkoutProduct__price"><small>₹</small><strong>{price}</strong></p>
            </div>
            <button className='addtocart' onClick={()=>{cartAction(name,"REMOVE_FROM_CART")}}>Remove from Cart</button>
            </article>
    )
}

export default CheckoutProduct

