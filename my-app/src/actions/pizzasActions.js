import axios from 'axios';


export const getAllPizzas =  () => async dispatch  => {


    dispatch({type:'GET-PIZZAS-REQUEST'})


    try {

        const response  =await axios.get('http://localhost:4000/add/getallpizass');

        // console.log(response)

        dispatch({type:'GET-PIZZAS-SUCCESS' , payload: response.data})


        
    } catch (error) {

        dispatch({type:'GET-PIZZAS-FAILED' , payload: error})

    }


}