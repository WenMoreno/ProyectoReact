
import { useCartContext } from "../context/CartContext";

const Cart= () => {

    const {cartLista, eliminarCarrito } = useCartContext()
    return (
        <div>
            {cartLista.map(prod=> <li>{prod.nombre}</li>)}
            <button onClick={eliminarCarrito}>Vaciar carrito</button>
           <h1>carrito</h1>
        </div>
    )
}

export default Cart;