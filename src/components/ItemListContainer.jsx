import { useState, useEffect } from 'react'
import { Container } from "react-bootstrap"
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"

export const ItemListContainer = (props) => {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(getDocs(q)), 1500)
        });
        const db = getFirestore();

        const refCollection = collection(db, "Products")

        const q =id ? query(refCollection, where("category", "==", id)) : refCollection

        promise.then((snapshot) => {
            setProducts(snapshot.docs.map((doc) =>{
                return {id: doc.id, ...doc.data()}
            }))
            setLoading(false);
        })
    }, [id]);

    if (loading) return <div className='imgLoading'><img src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" alt="" /></div>
    console.log(loading)
    return (
        <Container>
            <h1 className="h1Index">{props.greeting}</h1>
            <div className='cardProduct'>
                <ItemList products={products} />
            </div>
        </Container>
    )
}