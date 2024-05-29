import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import arrayProducts from "./json/products.json";
import ItemList from "./ItemList";
import Carousel from "./Carousel"
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc, getDocs, getFirestore, snapshotEqual} from "firebase/firestore";





const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    
//acceso a productos via JSON
    // useEffect(() => {
    //     const promesa = new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(id ? arrayProducts.filter(item => item.category == id): arrayProducts);
    //         }, 1000)
    //     });
        
    //     promesa.then(respuesta => {
    //         setItems(respuesta);
    //     })
    // }, [id])

// }, [])

//Acceder a una collection en firestore

useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'productos');
    getDocs(itemsCollection).then(snapShot => {
        if ( snapShot.size >0){
            setItems(snapShot.docs.map(item => (
                {id: item.id, ...item.data()})));
                
        } 
    });
}, [])




    return (
        <>
            {id ? "" : <Carousel/>}
            <div className="container">
                <div className="row my-5">
                    <ItemList items={items} /> 

                </div>
            </div>
        </>
    )
}

export default ItemListContainer;