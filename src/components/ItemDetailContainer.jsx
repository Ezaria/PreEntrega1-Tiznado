import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import arrayProducts from "./json/products.json"
import { useParams } from "react-router-dom";


const Probando = () => {
    
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                const producto = arrayProducts.find(item => item.id === parseInt(id));
                resolve(producto);
            }, 1000)
        });
        
        promesa.then(respuesta => {
            setItem(respuesta);
        })
    }, [id])

    return (
        <div className="container">
            <div className="row my-5">
                <ItemDetail item={item} />
            </div>
        </div>
    )
}

export default Probando 