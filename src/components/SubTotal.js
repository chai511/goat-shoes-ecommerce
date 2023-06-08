import React from "react";
import "./SubTotal.css";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import {getCartItemsTotal} from "./reducer";
import { Link } from "react-router-dom";
 
function SubTotal({checkout}) {
    const [initialState, dispatch] = useStateValue();
    return (
        <div className="subtotal">
                        <p>
                            Subtotal ({getCartItemsTotal(initialState.cart)} items): <strong>₹{getCartTotal(initialState.cart)}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                        <Link to="/paymentgateway" style={{ textDecoration: "none" }} onClick={()=>{checkout("ON_CHECKOUT")}}>
                        <button className="addtocart">Proceed to Checkout</button>
                        </Link>
        </div>
    )
}

export default SubTotal
