import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ id, pic, name, price, cartAction,count,cartIncrementDecrement }) {
    return (
            <article>
            <img className="checkoutProduct__image" src={pic} alt="" />
            <div className='text'>
            <p className="checkoutProduct__title">{name}</p>
            <p  className="checkoutProduct__price"><small>₹</small><strong>{price}</strong></p>
            </div>
            <div className='container'>
            <div class="quantity">
            <button class="quantity__minus" onClick={()=>{cartIncrementDecrement(name,"CART_ITEM_DECREMENT")}}><span>-</span></button>
            <input name="quantity" type="text" class="quantity__input" value={count}/>
            <button class="quantity__plus" onClick={()=>{cartIncrementDecrement(name,"CART_ITEM_INCREMENT")}}><span>+</span></button>
            </div>
            </div>
            </article>
    )
}

export default CheckoutProduct

