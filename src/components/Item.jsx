import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({product}) => (
    <Card className='styleCard' key={product.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.category}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Link to= {`/item/${product.id}`}>
        <Button variant="success">Comprar</Button>
        </Link>
      </Card.Body>
    </Card>
    
)
