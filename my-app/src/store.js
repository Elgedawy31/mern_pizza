import {combineReducers} from 'redux';
import { createStore , applyMiddleware } from 'redux';
import {getAllPizzasReducers} from './reducers/pizzasReducer.js'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


const finalReducer = combineReducers({

    getAllPizzasReducers : getAllPizzasReducers 
})

const initState = {}

const composeEnhancer= composeWithDevTools({})

const store = createStore(finalReducer , initState , composeEnhancer(applyMiddleware(thunk)))


export default store