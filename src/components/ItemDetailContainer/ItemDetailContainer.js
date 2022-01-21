import { useState, useEffect } from "react";
import  getFetch  from "../../help/getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [prod,setProd]= useState({})
    const [cargando, setCargando] = useState(true)

   useEffect(() => {
        getFetch
            .then(resp => setProd(resp.find(prod => prod.id === parseInt(prod.id)))) 
            .catch(err => console.log(err))
            .finally(()=>setCargando(false))})


    return (
        <>
            {cargando ? <h2>Cargando...</h2> :
            
       <div>
    <ItemDetail prod={prod} /> 
    
        </div>
            }
     </>
    )
        }

export default ItemDetailContainer