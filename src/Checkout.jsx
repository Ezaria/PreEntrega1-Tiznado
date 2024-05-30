import { useEffect, useState } from "react";
import { collection, getFirestore, addDoc, getDocs } from "firebase/firestore";



const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");



    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'productos');
        getDocs(itemsCollection).then(snapShot => {
            if ( snapShot.size >0){
                setCart(snapShot.docs.map(item => (
                    {id: item.id, ...item.data()})));
                    
            } 
        });
    }, [])

    const sumTotal = () => {
        return cart.reduce((acumulador, item) => acumulador += item.price, 0);
    }

    const generateOrder = () => {
        const buyer = {name:name, email:email, telephone:telephone};
        const items = cart.map(item => ({id:item.id, title:item.name, price:item.price}));
        const order = {buyer:buyer, items:items, total:sumTotal()}
    

        //Genero lar ordenes de compra al Firestore
        const db = getFirestore();
        const ordersCollections = collection(db, 'orders');
        addDoc(ordersCollections, order).then(data => {
            setOrderId(data.id)
            console.log('se genero la orden')
        })
        

        //Agregue los productos del JSON a mi Database en Firestore
        // const productsCollections = collection(db, 'productos');
        // arrayProducts.forEach(item =>{
        //     addDoc(productsCollections, item);
        // })
        
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setName(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telephone</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelephone(e.target.value)}} />
                        </div>
                        
                        <button type="button" className="btn text-white bg-black" onClick={generateOrder}>Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} width={80} /></td>
                                    <td>{item.nombre}</td>
                                    <td className="text-end">${item.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}><b>Total</b></td>
                                <td className="text-end"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-light" role="alert"> Felicictaciones Ticket de compra es: <b>{orderId}</b></div>: ""}
                </div>

            </div>
        </div>
    
    )
}

export default Checkout;