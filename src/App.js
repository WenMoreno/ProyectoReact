import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

const App=()=> {
  
  return (
    <BrowserRouter>
      <>
   <header>
      <NavBar />
    </header>
    <Routes>
      <Route exact path="/" element={ <ItemListContainer greeting='soy un componente del e-commerce' />}  />
      <Route exact path="/categoria/:idCategoria" element={ <ItemListContainer greeting='soy un componente del e-commerce' />}  />
      <Route exact path="/detalle/:id" element={<ItemDetailContainer />}  />
      <Route exact path="/cart" element={<Cart/> }  />
    
    </Routes>
    
    </>
    </BrowserRouter>
 
  );
}

export default App;
