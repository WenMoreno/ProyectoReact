
const productos= [ 
{  id:1,
    nombre:'Mouse Logitech G Series Lightsync G203 negro' ,
     categoria:'mouse', 
     precio:2300, 
     stock:5,
   descripcion:'soy un mouse',
},
{  id:2,
    nombre:'Mouse Logitech ' ,
     categoria:'teclado', 
     precio:2500, 
     stock:10,
   descripcion:'soy un teclado',
},
{  id:3,
    nombre:'Mouse ' ,
     categoria:'auricular', 
     precio:3000, 
     stock:4,
   descripcion:'soy un auri',
}
];

const getFetch = new Promise( (resolve) => {
    setTimeout( ()=>{
        resolve(productos)
    }, 2000 )
})

export default getFetch