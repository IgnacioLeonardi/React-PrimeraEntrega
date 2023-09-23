import { useContext } from 'react';
import { ItemCount } from './ItemCount';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext)

    const onAdd = count => addItem(product, count)
    
    return (
        < div className='cardProductDetail' >
            <ItemCount product={product} onAdd={onAdd} />
        </div >
    )
}