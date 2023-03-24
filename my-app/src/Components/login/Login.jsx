import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate } from 'react-router-dom'
function Login() {

    const [username , setUserName] = useState('')
    const [Password , setPassword] = useState('')


    const navi = useNavigate()


    const handleFunc =async (e) => {

        e.preventDefault()

        const data = {
            username ,
            password:Password
        }

        const dataUser = await axios.post('http://localhost:4000/user/signin'  ,data)


        if(dataUser.data){

            localStorage.setItem('token' , dataUser.data.token);

            navi('/')



        }
    }



  return (
    <div className='container mt-5'>
        
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">username</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={(e) => {setUserName(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={Password} onChange={(e) => {setPassword(e.target.value)}}/>
  </div>
  <div className="mb-3 form-check">
  </div>
  <button type="submit" className="btn btn-primary " onClick={handleFunc}>Submit</button>
</form>

<div style={{display:'block' , width:'300px' , margin:'30px auto'}}> You dont have any email ? <a href='/register'>register</a></div>


    </div>
  )
}

export default Login