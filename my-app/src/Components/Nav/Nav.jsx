import "./Nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Nav = () => {

  const [user , setUser] = useState('')

    const navi = useNavigate()

    const deleteUser = () => {

        localStorage.clear()

        navi('/login')


    }


    useEffect(() => {


      const getUser  = async () => {

        const userData = await axios.get('http://localhost:4000/user/getuser' , {
        headers: {
          'authorization ': `bearer ${localStorage.getItem('token')}`
        }
      })

      setUser(userData)

      }



      getUser()


  } ,[])



  



  return (
    <div className="nav">
      <div className="left">
        <NavLink className="alone" to="/">
          SheyPizza
        </NavLink>
      </div>

      <div className="right">
        {localStorage.getItem("token") ? (
          <div  className="local">
            <NavLink to="/addpizza">AddPizza </NavLink>
            <div >
              <img src={user.data ? user.data.user.image : ''} alt="" style={{width:'50px' , height:'50px'}} />
            </div>
            <button className="btn btn-danger" style={{display:'block'}} onClick={deleteUser} >logout </button>
          </div>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </div>
  );
};

export default Nav;
