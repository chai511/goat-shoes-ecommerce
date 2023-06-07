// here we define all the application level states and define actions to make the changes to the state
import export_initiaState from "../index"

export const getCartTotal=(cart)=>{
    return(cart.length>0?cart.reduce((amount, item) => item.price + amount, 0):0);
}

const reducer = (prevstate, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            console.log('I am in checkout',prevstate,export_initiaState)
            return {
                ...prevstate,
                cart: [...prevstate.cart, action.item],
            }
        
        case "REMOVE_FROM_CART":
            const index = prevstate.cart.findIndex(
                (cartItem) => cartItem.id === action.item.id
            );

            let newCart = [...prevstate.cart];

            if (index>=0) {
                newCart.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product(id: ${action.id}) as its not in the basket!`
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
                console.log('I am in checkout',prevstate,export_initiaState)
                let newState=JSON.parse(JSON.stringify(export_initiaState));
                newState.email=prevstate.email
                console.log(newState)
                return {
                    ...prevstate,
                   ...newState
                }
                

        default:
            return prevstate;
    }
}

export default reducer;