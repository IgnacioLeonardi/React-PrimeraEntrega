import { useState, useEffect } from 'react'
import data from '../data/products.json'
import { Container } from "react-bootstrap"
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        });
        promise.then((data) => { 
            if (!id) {
                setProducts(data);
            } else {
                const productFiltered = data.filter(
                    (product) => product.category === id
                );
                setProducts(productFiltered);
            }
            setLoading(false);
        });
    }, [id])
    console.log(loading);
    if (loading) return <div className='imgLoading'><img src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" alt="" /></div>
    return (
        <Container>
            <h1 className="h1Index">{props.greeting}</h1>
            <div className='cardProduct'>
                <ItemList products={products} />
            </div>
        </Container>
    )
}