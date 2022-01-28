import {createContext, useState, useContext} from 'react'


 const CartContext = createContext([])

 export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartLista, setCartLista] = useState([])

    const agregarAlCarrito = (item) => {       

        const index = cartLista.findIndex(i => i.id === item.id)
  
          if (index > -1) {
            const cantAnterior = cartLista[index].valor
  
            cartLista.splice(index, 1)

            setCartLista([...cartLista, { ...item, valor: item.valor + cantAnterior}])

          } else {
            setCartLista([...cartLista, item])
          }
      }

      const listadoProd= () => {
        

      }

      const precioTotal = () => {
        return cartLista.reduce((juntar, prod) => juntar+ (prod.valor*prod.precio), 0)
      }

      const eliminarProducto = (id) => {
        setCartLista(cartLista.filter(prod=> prod.id !==id))
      }


    const eliminarCarrito = () => {
        setCartLista([])
    }
    

    return (
        <CartContext.Provider value={{cartLista,
            agregarAlCarrito,
            eliminarCarrito,
            eliminarProducto,
            precioTotal
        
        }}>
           {children}
        </CartContext.Provider>
    )
}



export default CartContextProvider;


