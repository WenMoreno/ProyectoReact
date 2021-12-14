
const productos= [ 
{id:1, nombre:'remera' , categoria:'remeras', precio:1000}

];

const getFetch = new Promise( (resolve) => {
    setTimeout( ()=>{
        resolve(productos)
    }, 2000 )
})

export default getFetch