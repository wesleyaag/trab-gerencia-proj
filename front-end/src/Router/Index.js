import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import App from '../App'
import Login from '../Components/Login.js'
import Register from '../Components/Register.js'
import RegisterEmployee from '../Components/RegisterEmployee.js'
import ListCustomer from "../Components/ListCustomer";
import ListEmployee from "../Components/ListEmployee"
import AddItemInventory from "../Components/AddItemInventory" 
import ListItemInventory from "../Components/ListItemInventory";

function Router(){
    return(
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />}>
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register/>}/> 
            <Route path="RegisterEmployee" element={<RegisterEmployee/>}/>
            <Route path="ListCustomer" element={<ListCustomer/>}/>
            <Route path="ListEmployee" element={<ListEmployee/>}/>
            <Route path="AddItemInventory" element={<AddItemInventory/>}/>
            <Route path="ListItemInventory" element={<ListItemInventory/>}/>
        </Route>
        </Routes>
    </BrowserRouter>
    );
}
    

export default Router

