// here we define all the application level states and define actions to make the changes to the state
import export_initiaState from "../index"   

export const getCartTotal=(cart)=>{
    return(cart.length>0?cart.reduce((amount, item) => (item.price*item.count) + amount, 0):0);
}

export const getCartItemsTotal=(cart)=>{
    return(cart.length>0?cart.reduce((count, item) => item.count + count, 0):0);
}
const reducer = (prevstate, action) => {
    switch(action.type) {
        case "CART_ITEM_INCREMENT":
            const idx1 = prevstate.cart.findIndex(
                (cartItem) => cartItem.id === action.item.id
            );
            if (action.item['count']){
                action.item['count']=action.item['count']+1
            }
            else{
                action.item['count']=1
            }

            let newCart1 = [...prevstate.cart];

            if (idx1>=0) {
                newCart1[idx1]=action.item.cartItem     
            } else {
                console.warn(
                    `Can't remove product(id: ${action.item.name}) as its not in the basket!`
                )
            }
          return {
                ...prevstate,
                cart:newCart1,
                shoppingcart_count:getCartItemsTotal(newCart1)
            }
        case "CART_ITEM_DECREMENT":
            const idx2 = prevstate.cart.findIndex(
                (cartItem) => cartItem.id === action.item.id
            );

            if (action.item['count']>0){
                    action.item['count']=action.item['count']-1
                }
                else{
                    action.item['count']=0
                }

            let newCart2 = [...prevstate.cart];

                if (idx2>=0) {
                    newCart2[idx2]=action.item.cartItem     
                } else {
                    console.warn(
                        `Can't remove product(id: ${action.item.name}) as its not in the basket!`
                    )
                }
    
                return {
                    ...prevstate,
                    cart:newCart2,
                    shoppingcart_count:getCartItemsTotal(newCart2)
                }
            
        case "ADD_TO_CART":
            if (action.item['count']){
                action.item['count']=action.item['count']+1
            }
            else{
                action.item['count']=1
            }
           return {
                ...prevstate,
                cart: [...prevstate.cart, action.item]
            }
        
        case "REMOVE_FROM_CART":
            const index = prevstate.cart.findIndex(
                (cartItem) => cartItem.id === action.item.id
            );
            if (action.item['count']>0){
                action.item['count']=action.item['count']-1
            }
            else{
                action.item['count']=0
            }


            let newCart = [...prevstate.cart];

            if (index>=0) {
                newCart.splice(index, 1);     
            } else {
                console.warn(
                    `Can't remove product(id: ${action.item.name}) as its not in the basket!`
                )
            }

            return {
                ...prevstate,
                cart: newCart,
                shoppingcart_count:getCartItemsTotal(newCart)
            }
        case "ON_SEARCH_CHANGE":
            return {
                ...prevstate,
                searchfield:action.item.searchfield
            }
        case "ON_CHECKOUT":
                
                let newState=JSON.parse(JSON.stringify(export_initiaState));
                newState.email=prevstate.email
                
                return {
                    ...prevstate,
                   ...newState
                }
                

        default:
            return prevstate;
    }
}

export default reducer;