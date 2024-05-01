import CartWidget from "./CartWidget";
import SearchWidget from "./SearchWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    let contador = 0;
    return (  
        <>
            <nav className="navbar  p-4 mb-2 bg-grey text-light">
                <ul className="nav bg-black rounded">
                   <li> <NavLink className="nav-link text-white " aria-current="page" to={"/category/men"}>Hombre</NavLink></li> 
                   
                   <li> <NavLink className="nav-link text-white " to={"/category/women"}>Mujer</NavLink></li>
                   <li> <NavLink className="nav-link text-white " to={"/"}>Todo</NavLink></li>
                </ul>

                <ul className="nav navbar-center">
                    <li><NavLink className="nav-link text-white " to={"/"}><img src="https://www.rapha.cc/_ui/build/images/logo.svg" /></NavLink></li>
                </ul>
               
               
               <ul className="nav  navbar-right bg-black rounded">
                
                <li><NavLink className="nav-link text-white " href="#"><SearchWidget/></NavLink></li>
                <li> <NavLink className="nav-link text-white" href="#" > <CartWidget/></NavLink></li>
               </ul>
                
            </nav>              
        </>
    )
}

export default NavBar;