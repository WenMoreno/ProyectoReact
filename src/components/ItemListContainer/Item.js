import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item=({prod})=> {
    return (
      
      <div key={prod.id}>
      <Card>
 <img variant='top' width="170" height="170" src='https://http2.mlstatic.com/D_NQ_NP_781312-MLA45385798113_032021-O.webp'/>
<Card.Body>
<Card.Title>
 {prod.nombre}
</Card.Title>
<Card.Text>
{ `${prod.categoria}
${prod.precio}
${prod.descripcion} `}
</Card.Text>
</Card.Body>
<Card.Footer>
  <Link to={`/detalle/${prod.id}`}> 
  <Button variant="outline-dark">Más detalles</Button> 
  </Link>
 
</Card.Footer>
</Card>
 </div>
        
    )
}

export default Item
