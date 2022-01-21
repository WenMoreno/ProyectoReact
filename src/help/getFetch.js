
const productos= [ 
{  id:1,
    nombre:'Mouse Logitech G Series Lightsync G203 negro' ,
     categoria:'Mouse', 
     precio:2300, 
   descripcion:'soy un mouse',
},
{  id:2,
    nombre:'Mouse Logitech G Series Lightsync G203 negro' ,
     categoria:'Mouse', 
     precio:2500, 
   descripcion:'soy un mouse',
},
{  id:3,
    nombre:'Mouse Logitech G Series Lightsync G203 negro' ,
     categoria:'Mouse', 
     precio:3000, 
   descripcion:'soy un mouse',
}
];

const getFetch = new Promise( (resolve) => {
    setTimeout( ()=>{
        resolve(productos)
    }, 2000 )
})

export default getFetch