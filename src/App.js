
import './App.css';
import ItemDetail from './components/ItemDetailContainer/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemListContainer/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

const App=()=> {
  const inicial=1;
  const stock=10;
  const onAdd= 0;
  return (
   <>
   <header>
      <NavBar />
    </header>
    <ItemListContainer greeting='soy un componente del e-commerce' />
    <ItemCount inicial={inicial} stock={stock} onAdd={onAdd} />
    
    </>
  );
}

export default App;
