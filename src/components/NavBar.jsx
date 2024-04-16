import CartWidget from "./CartWidget";
import SearchWidget from "./SearchWidget";

const NavBar = () => {
    let contador = 0;
    return (  
        <>
            <nav className="navbar  p-3 mb-2 bg-grey text-light">
                <ul className="nav bg-black rounded">
                   <li> <a className="nav-link text-white " aria-current="page" href="#">Shop</a></li> 
                   <li> <a className="nav-link text-white " href="#">Explore</a></li>
                   <li> <a className="nav-link text-white " href="#">Bundle</a></li>
                </ul>

                <ul className="nav navbar-center">
                    <li><a className="nav-link text-white " href="#"><img src="https://www.rapha.cc/_ui/build/images/logo.svg" /></a></li>
                </ul>
               
               
               <ul className="nav  navbar-right bg-black rounded">
                <li><a className="nav-link text-white " href="#"><SearchWidget /></a></li>
                <li> <a className="nav-link text-white" href="#" > <CartWidget /></a></li>
               </ul>
                
               
            </nav>

            


           

            
              
        </>
    )
}

export default NavBar;