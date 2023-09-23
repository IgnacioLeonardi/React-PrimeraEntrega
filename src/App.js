import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import  NavBar  from './components/NavBar';
import { Cart } from './components/Cart'
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/' element={<ItemListContainer greeting="Bienvenido" />} />
          <Route path='/category/:id' element={<ItemListContainer greeting="Bienvenido" />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={404} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

