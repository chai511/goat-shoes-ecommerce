import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import './Product.css'
import { Checkout_State } from "./Checkout";
import OrderedProduct from "./OrderedProduct";
import Header from "../Header";

function Orders() {
     return (
           <>
           <Header></Header>
           <img src={require("../assets/goat_banner.png")} alt="goat banner" height="100vh" width="980vw"/>
           <div >
            </div>
                <div>
                    <h2>Your Orders</h2>
                    <main className='grid'>
                      {Checkout_State.cart?Checkout_State.cart.map(item => (
                        item.addtoCartClicked?<OrderedProduct 
                            id = {item.id}
                            name = {item.name}
                            pic = {item.pic}
                            price = {item.price}
                            count={item.count}
                        />:<></>)):<h2>You have no Items checked out yet! Happy Shopping!</h2>}
                    </main>
               </div>
            
        </>
    )
}

export default Orders
