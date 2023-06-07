import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import './Product.css'
import './Checkout.css'
import SubTotal from "./SubTotal";
import { Checkout_State } from "./Checkout";
import OrderedProduct from "./OrderedProduct";

function Orders() {
     return (
           <>
           <img src={require("../assets/goat_banner.png")} alt="goat banner" height="100vh" width="980vw"/>
           <div className="checkout__right">
            </div>
                <div>
                    <h2>Your Orders</h2>
                    <main className='grid'>
                      {Checkout_State.cart.map(item => (
                        item.addtoCartClicked?<OrderedProduct 
                            id = {item.id}
                            name = {item.name}
                            pic = {item.pic}
                            price = {item.price}
                        />:<></>
                    ))} 
                    </main>
                   </div>
             </>
    )
}

export default Orders
