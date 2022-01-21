
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

const App=()=> {
  
  return (
   <>
   <header>
      <NavBar />
    </header>
    <ItemListContainer greeting='soy un componente del e-commerce' />
    <ItemDetailContainer />
    </>
  );
}

export default App;
