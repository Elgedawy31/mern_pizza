export const addToCart = (pizza , quantity , varient) => dispatch => {


    var cartitem = {
        name:pizza.name , 
        _id: pizza._id ,
        image:pizza.image , 
        varient: varient , 
        quantity : quantity ,
        prices : pizza.prices ,
        // price : pizza.prices[0][varient] * quantity
    }

    dispatch({type: 'ADD-TO-CART' , payload:cartitem})

}