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
            console.log('I am in increment',prevstate.cart,action.item)
            const idx = prevstate.cart.findIndex(
                (cartItem) => cartItem.id === action.item.id
            );
            if (action.item['count']){
                action.item['count']=action.item['count']+1
            }
            else{
                action.item['count']=1
            }
          return {
                ...prevstate,
                cart:[...action.item]
            }
        case "CART_ITEM_DECREMENT":
            console.log('I am in decrement',prevstate.cart,action.item)
            const idx1 = prevstate.cart.findIndex(
                (cartItem) => cartItem.id === action.item.id
            );
            console.log('I am in decrement',prevstate,action.item)
                if (action.item['count']>0){
                    action.item['count']=action.item['count']-1
                }
                else{
                    action.item['count']=0
                }
    
                return {
                    ...prevstate,
                    cart:[...action.item]
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
                cart: [...prevstate.cart, action.item],
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
                cart: newCart
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