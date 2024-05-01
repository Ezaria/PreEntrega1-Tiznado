import { Link } from "react-router-dom"
const Item = ({item}) => {
    return (
        <div className="col-md-4 text-center">
            <Link to={"/item/" + item.id} className="text-decoration-none">
            <div className="card" >
                <img className="card-img-top" src={item.image} alt ={item.name} />
                <div className="card-body">
                    <p className="card-text">{item.name}</p>
                    <p className="card-text">${item.price}</p>
                </div>
            </div>
            </Link>
        </div>

    )
}

export default Item