export const getAllPizzasReducers = (state = {pizzas: []} , action) => {


    switch (action.type) {
        case 'GET-PIZZAS-REQUEST':

            return { loading:true , ...state}
            

        case 'GET-PIZZAS-SUCCESS':
            return{
                loading:false ,
                pizzas: action.payload
            } 

        case  '' : return{
            error: action.payload ,
            loading:true 
        }


        default : return state


    }

}