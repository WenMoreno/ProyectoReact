import React, {useState} from 'react'


const ItemCount = ({ stock, onAdd })=> {
    
 const [valor,setValor]  = useState(1)



    const handleResta = ()=> {
        if (valor > 1) {
            setValor(valor -1)
        }
    };
     
    const handleSuma = ()=> {
        valor < stock && setValor(valor +1) 
    };

   

    return (
        <div>
            <h1> {valor} </h1>
            <button onClick={()=>handleResta(1)}>-</button>
            <button disabled={valor===stock} onClick={()=>handleSuma(1)}>+</button>
            <button disabled={valor===0} onClick={()=>onAdd(valor)}>Agregar al carrito</button>
        </div>
    );

      

    
}
    
 
export default ItemCount;
