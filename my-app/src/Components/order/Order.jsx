import React from 'react'
import {useSelector } from 'react-redux';
import './Order.css'
import {NavLink} from 'react-router-dom'
export default function Order({OrderItem}) {


    const state = useSelector(state => state.getAllPizzasReducers.pizzas.PizzaData)

    const data = state[OrderItem[0].index] || 0

    
    console.log(data)


    const aha = () => {

      window.alert('Done')

      window.reload()

      OrderItem = []
    }

    const ahetin = () => {

      window.reload()

      OrderItem = []

    }


  return (


<div>
<div className='cart' style={{position:'relative'}}>
      <div>
      <NavLink  to='/' className='btn ahetin btn-danger' style={{width:'fit-content' , display:'block' , margin:'10px auto' , textDecoration:'none'}} onClick={ahetin}>X</NavLink>
      <h3>{data.name}</h3>
        <p>{data.desc}</p>
      </div>
     <div>
     <div className='size'>Pizza Size : <span>{OrderItem[0].varient}</span></div>
        <div className="size">Number of Panckakes : <span>{OrderItem[0].Quantity}</span> </div>
        <div className="price"> 
        The Price Is : 
        
        <span style={{color:'red' , fontWeight:'bolder'}}> {data.prices[0][OrderItem[0].varient] * OrderItem[0].Quantity }</span>
     </div>
           
        </div>

        <div>
          <img src={data.image} alt=""  style={{width:'400px' , borderRadius:'6px'}}/>
        </div>
    </div>
    <NavLink to='/' className='btn btn-success' style={{width:'fit-content' , display:'block' , margin:'10px auto' , textDecoration:'none'}} onClick={aha}>Buy Now </NavLink>
   

</div>


  )
}
