import React, {useState} from 'react'

const ItemCount = ({ inicial, stock})=> {
 const [value,setValue]  = useState(inicial)
    const handleResta = (num)=> {
        if (value > inicial) {
            setValue(value -num)
        }
    };
     
    const handleSuma = (num)=> {
        value < stock ? setValue(value +num) : alert('no hay mas stock') 
    };

    return (
        <div>
            <h1> {value} </h1>
            <button onClick={()=>handleResta(1)}>-</button>
            <button onClick={()=>handleSuma(1)}>+</button>
            <button onClick>Agregar al carrito</button>
        </div>
    );
      

    
}
    

export default ItemCount
