import {Card, Button} from 'react-bootstrap'


const Item=({prod})=> {
    return (
        <div key={prod.id}>
             <Card>
            <img variant='top' src='https://http2.mlstatic.com/D_NQ_NP_815292-MLA47935452711_102021-O.webp'/>
    <Card.Body>
      <Card.Title>{ `${prod.categoria}${prod.nombre}`}
      </Card.Title>
      <Card.Text>
       {prod.precio}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="outline-dark">Más detalles</Button>  
      </Card.Footer>
  </Card>
        </div>
    )
}

export default Item
