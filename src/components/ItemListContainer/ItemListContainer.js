import { useState, useEffect } from 'react'
import ItemList from "./ItemList"
import getFetch from "../../help/getFetch"


const ItemListContainer=({greeting})=> {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
 
         useEffect(() => {
          getFetch
          .then(resp => setProductos(resp))
                .catch(err => console.log(err))
                .finally(() => setCargando(false))
        }, [])

    return (
    <section>
        {greeting}

        {cargando ? <h1>Cargando...</h1> : 
        <ItemList productos={productos} />
        }

    
    </section> 
    ) }

export default ItemListContainer
