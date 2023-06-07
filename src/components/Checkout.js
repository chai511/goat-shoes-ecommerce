import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import './Product.css'
import './Checkout.css'
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";

export var Checkout_State="";

function Checkout({cart,cartAction,checkout}) {
    const [currentstate,dispatch]=useStateValue();
    Checkout_State=JSON.parse(JSON.stringify(currentstate))
    return (
           <>
           <img src={require("../assets/goat_banner.png")} alt="goat banner" height="100vh" width="980vw"/>
           <div className="checkout__right">
            <SubTotal checkout={checkout} />
            </div>
                <div>
                    <h2>Review Your Shopping Cart & Checkout</h2>

                    <main className='grid'>
                      {cart.map(item => (
                        item.addtoCartClicked?<CheckoutProduct 
                            id = {item.id}
                            name = {item.name}
                            pic = {item.pic}
                            price = {item.price}
                            addtoCartClicked = {item.addtoCartClicked}
                            cartAction={cartAction}
                        />:<></>
                    ))} 
                    </main>
                    </div>
             </>
    )
}

export default Checkout
