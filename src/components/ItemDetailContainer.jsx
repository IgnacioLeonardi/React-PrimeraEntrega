import { useState, useEffect } from 'react'
import data from '../data/products.json'
import { Container } from "react-bootstrap"
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'
export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState(null);

    const { id } = useParams();
   
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const productById = data.find((product) => product.id === id);
                resolve(productById);
            }, 2000)
        });

        promise.then((data) => setProduct(data));
    }, [])

    if (!product) return <div className='imgLoading'><img src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" alt="" /></div>
    return (
        <Container>
            <h1 className="h1Index">{props.greeting}</h1>
            <ItemDetail product={product}/>
        </Container>
    )
}