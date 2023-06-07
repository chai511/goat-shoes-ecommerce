import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import {Link} from 'react-router-dom';

const Product = ({ pic, name, price,cartAction,addtoCartClicked,checkout}) => {
  const [currentstate,dispatch]=useStateValue();
   return (
      <article>
      <img alt='shoes' src={pic} height="150" width="150"/>
      <div className='text'>
        <h4>{name}</h4>
        <p>₹{price}</p>
      </div>
      {currentstate.email==="Guest"?
      <Link to="/login" style={{ textDecoration: "none" }} onClick={()=>{checkout("ON_CHECKOUT")}}><div className='Button_Container'><button className='addtocart' onClick={()=>cartAction(name,"ADD_TO_CART")}>Add to Cart</button></div></Link>
      :addtoCartClicked?<><input type="checkbox" defaultChecked={true} onChange={()=>cartAction(name,"REMOVE_FROM_CART")}/><label>Uncheck to remove from Cart</label></>:
      <div className='Button_Container'>
      <button className='addtocart' onClick={()=>cartAction(name,"ADD_TO_CART")}>Add to Cart</button></div>}
      </article>   
  
  );
}

export default Product;
