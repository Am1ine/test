import {
<<<<<<< HEAD
    BrowserRouter,
    Routes,
    Route, Navigate,
} from "react-router-dom";

import Home  from './user/home/home';
import Register from "./user/security/register";
import Login from "./user/security/login";
import Dashboard from "./user/dashboard/Dashboard";

const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
};
const PrivateRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
};
=======
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//user imports 
import Home  from './user/home/home';
import Register from "./user/register";
import Login from "./user/login";

>>>>>>> origin/master
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
<<<<<<< HEAD
          <Route path="/Dashboard" element={<PrivateRoute element={<Dashboard />} />} />

            linna 7ot rout lo5rin

            <Route path="*" element={<Navigate to="/" />} />
=======

>>>>>>> origin/master
        </Routes>
      </BrowserRouter>
  );
}

export default App;
