import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//user imports 
import Home  from './user/home/home';
import Register from "./user/register";
import Login from "./user/login";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
