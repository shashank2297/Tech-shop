let initialstate = {
    cart: [],
    cartcount: 0
}

const reducer = (state=initialstate,action) => {

    switch(action.type){
        case "Add_to_cart" :
            return{
                ...state,
                cart: [...state.cart, action.payload],
                cartcount: state.cartcount+1
            };

        case "Delete_cart":
            const updatedCart = state.cart.filter(item => item !== action.payload);
            return {
                ...state,
                cart: updatedCart,
                cartcount: state.cartcount - 1
            };
            
        default :
            return state
    }
}

export default reducer