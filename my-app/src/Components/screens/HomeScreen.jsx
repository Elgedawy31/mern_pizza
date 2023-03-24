import './HomeScreen.css'
import {  useState , useEffect } from 'react'
import {useDispatch , useSelector } from 'react-redux'
import { getAllPizzas } from '../../actions/pizzasActions'
import {NavLink} from 'react-router-dom'



const HomeScreen = ({OrderItem}) => {

    const [Quantity , setQuantity]  = useState(2)
    const [varient , setVarient]  = useState('small')
    const [aha , setaha] = useState(false)
    const [ima , setIma] = useState(0)
    const [newState , setNewState] = useState([])

    const state = useSelector(state => state.getAllPizzasReducers)

    console.log(state)


    let myState =state.pizzas.PizzaData



    const Dispatch = useDispatch();

    useEffect(() => {

        Dispatch(getAllPizzas())

    } ,[Dispatch])



    


    const filterFunc = () => {
        
        if(myState !== undefined)
        {

        let data = myState.filter(e => {

            return (e.category  === 'veg')
        })

        setNewState(data)

        }

    }
    const filterNon = () => {
        
        if(myState !== undefined)
        {

        let data = myState.filter(e => {

            return (e.category  === 'nonveg')
        })

        setNewState(data)

        }

    }
    const all = () => {
        
        if(myState !== undefined)
        {

        let data = myState.filter(e => {

            return (e)
        })

        setNewState(data)

        }

    }



    return(
        <div className='all'>

            <div className='filter'>
              
              <button className='btn btn-succes' onClick={filterFunc}>veg Pizzas </button>
              <button className='btn btn-succes' onClick={filterNon}>Non veg Pizzas </button>
              <button className='btn btn-succes' onClick={all}>All Pizzas </button>

            </div>

           <div >{state.pizzas.PizzaData ? <div className="screen">{newState.length > 0? newState.map((e , index) => {
            return(

                <div className="box" key={index} >
                <h3>{e.name}</h3>
                 <img src={e.image} alt=""   onClick ={() => {
                      
                      setaha(!aha)
                      setIma(index)

                 }} />
                 <div className="kalam">
                     <span>Varients :</span>
                     <span>Quantity : </span>
                 </div>
                 <div className="inputs">
                    <select  value={varient} onChange= {(e) => setVarient(e.target.value)} >
                       {
                        e.varients.map((e, i) => {
                            return(
                                <option value={e} key={i}>{e}</option>
                            )
                        })
                       }
                    </select>
                    <select  value={Quantity} onChange={(e) => {setQuantity(e.target.value)}} >
                        {[...Array(10).keys()].map((e , i) => {
                            return(
                                <option value={i + 1}  key={i}>{e + 1}</option>
                            )
                        })}
                    </select>
                    </div>

                    <div className='last'>
                        <h3>Price : {state.pizzas.PizzaData ? state.pizzas.PizzaData[0].prices[0][varient] * Quantity: 'ERr'} $</h3>
                        <NavLink to='/cart' style={{textDecoration:'none'}} className='btn' onClick={(e) => {
                            OrderItem.push({index , Quantity , varient}) 
                        }}>Add To Cart</NavLink>
                    </div>


                </div>
                
               )
           }):  myState.map((e , index) => {

               return(

                <div className="box" key={index} >
                <h3>{e.name}</h3>
                 <img src={e.image} alt=""   onClick ={() => {
                      
                      setaha(!aha)
                      setIma(index)

                 }} />
                 <div className="kalam">
                     <span>Varients :</span>
                     <span>Quantity : </span>
                 </div>
                 <div className="inputs">
                    <select  value={varient} onChange= {(e) => setVarient(e.target.value)} >
                       {
                        e.varients.map((e, i) => {
                            return(
                                <option value={e} key={i}>{e}</option>
                            )
                        })
                       }
                    </select>
                    <select  value={Quantity} onChange={(e) => {setQuantity(e.target.value)}} >
                        {[...Array(10).keys()].map((e , i) => {
                            return(
                                <option value={i + 1}  key={i}>{e + 1}</option>
                            )
                        })}
                    </select>
                    </div>

                    <div className='last'>
                        <h3>Price : {state.pizzas.PizzaData ? state.pizzas.PizzaData[0].prices[0][varient] * Quantity: 'ERr'} $</h3>
                        <NavLink to='/cart' style={{textDecoration:'none'}} className='btn' onClick={(e) => {
                            OrderItem.push({index , Quantity , varient}) 
                        }}>Add To Cart</NavLink>
                    </div>


                </div>
                
               )

           })}
           
           </div> : 'undifined'}</div>


            <h1 className={aha ? 'show' :'hide'}  >
                <div className='hi'>
                    <h2>{state.pizzas.PizzaData ? state.pizzas.PizzaData[ima].name: 'UNdeifined'}</h2>
                    <img src={state.pizzas.PizzaData ? state.pizzas.PizzaData[ima].image: 'UNdeifined'} alt="" />
                    <p>{state.pizzas.PizzaData ? state.pizzas.PizzaData[ima].desc: 'UNdeifined'}</p>
                    <button className='btn'  onClick={() => setaha(!aha)}>Close</button>
                </div> 
            </h1>
        
        </div>
    )
}


export default HomeScreen