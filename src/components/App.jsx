import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoProvider } from '../context/CarritoContext';
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './Contacto/Contacto';
import { Cart } from './Cart/Cart';
const App = () => {
  //cargarBDD()
  return (
    <>
  <BrowserRouter>
  <CarritoProvider>
    <DarkModeProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/> 
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes> 
      <ToastContainer/>
    </DarkModeProvider>
    </CarritoProvider>
  </BrowserRouter>
      
    </>
  );
}

export default App;