import React, {useState} from 'react'



const ItemCount = ({ inicial, stock, onAdd})=> {
 const [value,setValue]  = useState(inicial)
 const [agregar,setAgregar] = useState(onAdd)


    const handleResta = (num)=> {
        if (value > inicial) {
            setValue(value -num)
        }
    };
     
    const handleSuma = (num)=> {
        value < stock ? setValue(value +num) : alert('no hay mas stock') 
    };

    const addCarrito= (num)=> {
         if (num<= stock ) { 
            setAgregar(num) 
         } 
    };

    return (
        <div>
            <h1> {value} </h1>
            <button onClick={()=>handleResta(1)}>-</button>
            <button disabled={value===stock} onClick={()=>handleSuma(1)}>+</button>
            <button onClick={()=>addCarrito(value)}>Agregar al carrito</button>
        </div>
    );
      

    
}
    
 
export default ItemCount;
