import { Link } from "react-router-dom"

const Error404 = () => {

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1>- ERROR -</h1>
                    <h2>404</h2>
                    <p><Link to={"/"} className="btn bg-black text-white">Volver a la página inicial </Link> </p>
                </div>
            </div>
        </div>

    )

}

export default Error404