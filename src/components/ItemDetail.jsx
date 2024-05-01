import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.image} className="img-fluid" alt={item.name} />
                </div>
                <div className="col-md-4">
                    <h1 className="fs-3 text-uppercase fw-semibold">{item.name}</h1>
                    <p className="fs-4 fw-bold">${item.price}</p>
                    <p className="small">{item.decription}</p>
                    <ItemCount stock={item.stock} />
        
                    
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;