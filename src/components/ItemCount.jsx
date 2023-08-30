import Card from 'react-bootstrap/Card';
import carrito from "../assets/shoppingcart_77968.png"
import { useState } from 'react';

export const ItemCount = ({product}) => {
    const [count, setCount] = useState(1);
    const handleDecreaseCount = () => {
        if (count > 1){
            setCount((prev) => prev - 1)
        }
    }
    const handleIncreaseCount = () => {
        if ( product.stock > count){
            setCount((prev) => prev + 1)
        }
    }
    const onAdd = () => {
        alert(`Usted ha agregado ${count} ${product.name} al carrito.`)
    }
    return (
        <Card border="danger" style={{ width: '20rem' }}>
            <Card.Header> <img src={product.image} alt="" /> </Card.Header>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.category}
                    {product.price}
                </Card.Text>
                <div className='divDetail'>
                    <button onClick={handleDecreaseCount} className="buttonCard"> - </button>
                    <span>{count}</span>
                    <button onClick={handleIncreaseCount} className="buttonCard">+</button>
                    <button onClick={onAdd} className="buttonCard"><img className="imgCard" src={carrito} alt="carrito" /></button>
                </div>
            </Card.Body>
        </Card>
    );
}
