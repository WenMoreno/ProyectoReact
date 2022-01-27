import { useState} from "react";
import { Button } from "bootstrap";
import ItemCount from "../ItemListContainer/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({prod}) => {
    const [carrito, setCarrito] = useState(true);

    const { cartLista, agregarAlCarrito} = useCartContext()

    const onAdd = (valor) => {
console.log(valor)
setCarrito(false)
agregarAlCarrito({...prod, valor:valor})
    }
    console.log(cartLista)

    return (
        <div>
         <h1>{prod.nombre}</h1>  
         <p>{prod.precio}</p> 
        <p>{prod.descripcion}</p>
          <img  width="170" height="170" src='https://http2.mlstatic.com/D_NQ_NP_781312-MLA45385798113_032021-O.webp'/>

          {carrito ? (<ItemCount stock={prod.stock} onAdd={onAdd} />) :
          (
            <Link to={'/cart'} > <button>Ir al carrito</button> </Link>  
          )}
         
         </div>
)
};

 export default ItemDetail
