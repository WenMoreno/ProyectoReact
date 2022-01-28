import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ItemList from "./ItemList"
import getFetch from "../../help/getFetch"
import {doc, getDoc}from 'firebase/firestore'



const ItemListContainer=({greeting})=> {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const {idCategoria} = useParams()
 
         useEffect(() => {
             if (idCategoria) {
                getFetch
                .then(resp => setProductos(resp.filter(prod=> prod.categoria === idCategoria)))
                      .catch(err => console.log(err))
                      .finally(() => setCargando(false))
             } else {
                 
          getFetch
          .then(resp => setProductos(resp))
                .catch(err => console.log(err))
                .finally(() => setCargando(false))
             }

        }, [idCategoria])

    return (
    <section>
        {greeting}

        {cargando ? <h1>Cargando...</h1> : 
        <ItemList productos={productos} />
        }
     </section> 
    ) }

export default ItemListContainer
