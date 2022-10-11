import { Link } from "react-router-dom";


function Nav() {
    return(
        <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
            <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">  
                <div class="collapse navbar-collapse flex-grow items-center">
                
                    <div class="text-xl text-white pr-2 font-semibold"><i class="fas fa-glass-martini-alt"></i></div>   
                </div>
                <ul class="navbar-nav flex  pl-0 list-style-none mr-auto">
                    <li class="nav-item p-2">
                        <Link class="nav-link text-white underline hover:text-gray-400" to="/">Home</Link>
                    </li>
                    <li class="nav-item p-2">
                        <Link class="nav-link text-white underline hover:text-gray-400" to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </div>
        </nav>    
        
    )
        
}

export default Nav; 