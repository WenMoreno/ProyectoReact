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


    const eliminarCarrito = () => {
        setCartLista([])
    }
    

    return (
        <CartContext.Provider value={{cartLista,
            agregarAlCarrito,
            eliminarCarrito
        
        }}>
           {children}
        </CartContext.Provider>
    )
}



export default CartContextProvider;