import "./App.css";
import Nav from "./Components/Nav/Nav";
import HomeScreen from "./Components/screens/HomeScreen";
import {Route  , Routes} from 'react-router-dom'
import Order from "./Components/order/Order";
import AddPizza from "./Components/addPizzas/addPizza";
import Login from "./Components/login/Login";
import Register from "./Components/login/Register";

function App() {
  const OrderItem = [];


  


  return (
    <div className="App">


        <Nav />
      <Routes>

        <Route path="/" element={<HomeScreen OrderItem={OrderItem} />} >
          
        </Route>
        <Route path='/addpizza' element={localStorage.getItem('token') ? <AddPizza /> :<Login />} />


        <Route path="/cart" element = {localStorage.getItem('token') ? < Order OrderItem={OrderItem}/>  :<Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        
          
      </Routes>
    </div>
  );
}

export default App;
