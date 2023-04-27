/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';
import './nav.css';
const Nav = () => {
    return(<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand"  to={"#"}>Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" id="bar1">
                        <NavLink className="nav-link active" aria-current="page" to={'/'}>Home</NavLink>
                        <NavLink className="nav-link" to={'/features'}>Features</NavLink>
                        <NavLink className="nav-link"  to={"/search"}>Pricing</NavLink>
                        <NavLink className="nav-link"  to={"/cart"}>Cart</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </>);
}
export default Nav;
// import React from "react";
// import { ShoppingBasket } from "@mui/icons-material";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Nav = () => {
//   const  cart = useSelector((state) => state);
//   return (
//     <>
//       <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto">
//         <Link to={"/"}>
//           <div className="ml-5">
//             <h1 className="bg-gradient-to-br from-violet-900 to-purple-300 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold logo cursor-pointer tracking-wider">
//               REDUX-CART
//             </h1>
//           </div>
//         </Link>
//         <div className="flex list-none items-center space-x-6 mr-5 text-gray-700 -tracking-tighterr font-semibold">
//           <Link to={"/"}>
//             <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
//               Home
//             </li>
//           </Link>
//           <Link to={"/cart"}>
//             <div className="relative">
//               <ShoppingBasket className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />

//               {cart.length > 0 && (
//                 <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
//                   {cart.length}
//                 </div>
//               )}
//             </div>
//           </Link>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Nav;