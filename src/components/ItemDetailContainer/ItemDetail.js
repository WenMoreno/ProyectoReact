
const ItemDetail = ({item}) => {
    const {nombre, precio, descripcion} = item;
    return (
        <div>
         <h1>{item.nombre}</h1>  
         <p>{precio}</p> 
         <p>{descripcion}</p>
         <img  width="170" height="170" src='https://http2.mlstatic.com/D_NQ_NP_781312-MLA45385798113_032021-O.webp'/>
         </div>
    )
}

export default ItemDetail
