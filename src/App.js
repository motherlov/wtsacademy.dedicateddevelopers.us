
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Component/Auth/Login/Login';
import Register from './Component/Auth/Register/Register';
import Home from './Component/Cms/Home/Home';
import NavBar from './Component/ShareModule/NavBar/NavBar';
import AddProducts from './Component/AddProducts';
import UpdateProduct from './Component/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddProducts/>} />
        <Route path="/update/:id" element={<UpdateProduct/>} />
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
