export const addToCartReducer = (initState ={cartItems: []} , action) => {
    

    switch (action.type) {


        case 'ADD-TO-CART':
            
            return{


                ...initState ,
                cartItems:[...initState.cartItems, action.payload]

            }

        default:

        
            return{
                initState
            }
    }


}