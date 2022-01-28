
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Cart= () => {

    const {cartLista, eliminarCarrito, precioTotal, eliminarProducto } = useCartContext()
    return (
        <div>
            {cartLista.map(prod=> <li>{prod.nombre} {prod.valor} </li>)}
           <p>{precioTotal} </p>
            <button onClick={eliminarProducto}>eliminar</button>

          <Link to="/detalle"> <button onClick={eliminarCarrito}>Vaciar carrito</button> </Link>  
           <h1>carrito</h1>
        </div>
    )
}

export default Cart;