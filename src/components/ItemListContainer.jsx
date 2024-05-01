import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProducts from "./json/products.json";
import ItemList from "./ItemList";
import Carousel from "./Carousel"
import ItemDetail from "./ItemDetail";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProducts.filter(item => item.category == id): arrayProducts);
            }, 1000)
        });
        
        promesa.then(respuesta => {
            setItems(respuesta);
        })
    }, [id])

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