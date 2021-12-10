
import './App.css';
import ItemCount from './components/ItemListContainer/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

const App=()=> {
  const inicial=1;
  const stock=10;
  return (
   <>
   <header>
      <NavBar />
    </header>
    <ItemListContainer greeting='soy un componente del e-commerce' />
    <ItemCount inicial={inicial} stock={stock} />
    </>
  );
}

export default App;
