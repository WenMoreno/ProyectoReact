import { useState, useEffect } from "react";
import getFetch from "../../help/getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item,setItem]= useState([]);

    useEffect((id) => {
        getFetch
        .then((resp) => {
            setItem(resp.find((prod)=> prod.id===parseInt(id)));  
        } )
    }, []);
    return (
        <div>
    <ItemDetail item={item} /> 
    
        </div>
     
    )
}

export default ItemDetailContainer
