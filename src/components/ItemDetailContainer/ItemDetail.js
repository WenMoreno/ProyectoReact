
import ItemCount from "../ItemListContainer/ItemCount";


const ItemDetail = ({prod}) => {
    return (
        <div>
         <h1>Mouse Logitech</h1>  
         <p>{prod.precio}</p> 
        <p>{prod.descripcion}</p>
          <img  width="170" height="170" src='https://http2.mlstatic.com/D_NQ_NP_781312-MLA45385798113_032021-O.webp'/>
         <ItemCount/>
         </div>
)
}

 export default ItemDetail
