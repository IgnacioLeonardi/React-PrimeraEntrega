import { useState, useEffect } from 'react'
import { Container } from "react-bootstrap"
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, getFirestore, doc } from 'firebase/firestore'
export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState(null);
    
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, "Products", id)

        getDoc(refDoc).then((snapshot) => {
            setProduct({id: snapshot.id, ...snapshot.data()});
        });
    }, [id])



    if (!product) return <div className='imgLoading'><img src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" alt="" /></div>
    return (
        <Container>
            <h1 className="h1Index">{props.greeting}</h1>
            <ItemDetail product={product}/>
        </Container>
    )
}