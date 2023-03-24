import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate , NavLink} from 'react-router-dom'
function Register() {

    const [username , setUserName] = useState('')
    const [Password , setPassword] = useState('')
    const [email , setEmail] = useState('')
    const [CPass , setCPass] = useState('')
    const [phone , setphone] = useState('')
    const [image , setimage] = useState('')


    const navi = useNavigate()


    const handleFunc =async (e) => {

        e.preventDefault()


        const formData = new FormData()

        formData.append('image' , image)
        formData.append('username' , username)
        formData.append('password' , Password)
        formData.append('email' , email)
        formData.append('CPass' , CPass)
        formData.append('phone' , phone)

        // const data = {
        //     username ,
        //     password:Password ,
        //     email , 
        //     CPass , 
        //     phone
        // }

        const dataUser = await axios.post('http://localhost:4000/user/signup'  ,formData)


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
    <input  type="text"  name='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={(e) => {setUserName(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">email</label>
    <input  type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => {setEmail(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input  type="password" name='password' className="form-control" id="exampleInputPassword1" value={Password} onChange={(e) => {setPassword(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="confirm" className="form-label">Confirm Password</label>
    <input  type="password" name='CPass' className="form-control" id="confirm" value={CPass} onChange={(e) => {setCPass(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="hone" className="form-label">Phone</label>
    <input  type="text"  name='phone' className="form-control" id="hone" aria-describedby="emailHelp" value={phone} onChange={(e) => {setphone(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="ima" className="form-label">personal image</label>
    <input  type="file" name='image'  className="form-control" id="ima" aria-describedby="emailHelp" onChange={(e) => {setimage(e.target.files[0])}} />
  </div>


  <button type="submit" className="btn btn-primary " onClick={handleFunc}>Submit</button>
</form>

 <div style={{display:'block' , width:'300px' , margin:'30px auto'}}> You Have Allready Email ? <NavLink to='/login'>Login</NavLink></div>

    </div>
  )
}

export default Register