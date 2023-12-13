import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Siginup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Productlist from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

        <Route element={<PrivateComponent />}>
        <Route path='/' element={<Productlist />}/>
        <Route path='/add' element={<AddProduct />} />
        <Route path='/update/:id' element={<UpdateProduct/>} />
        <Route path='/profile' element={<h1>profile component</h1>} />
        <Route path='/logout' element={<h1>Logut component</h1>} />
       </Route>

        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        
      </Routes>
     
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
