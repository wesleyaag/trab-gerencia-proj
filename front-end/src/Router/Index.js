import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import App from '../App'
import Login from '../Components/Login.js'
import Register from '../Components/Register.js'

function Router(){
    return(
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />}>
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register/>}/>
        </Route>
        </Routes>
    </BrowserRouter>
    );
}
    

export default Router

