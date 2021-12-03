
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

const App=()=> {
  return (
   <header>
    <NavBar/>
    <ItemListContainer greeting='soy un componente del e-commerce'/>
    </header>
  );
}

export default App;
