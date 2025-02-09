// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/dashboard">Dashboard</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiLogOut, FiShoppingBag } from "react-icons/fi";
import { logout } from "../store/slices/authSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    // dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <FiShoppingBag className="h-8 w-8" />
            <Link to="/" className="ml-2 text-xl font-bold">
              E-Commerce
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-gray-300">
              Products
            </Link>
         
            {token ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 hover:text-gray-300"
              >
                <FiLogOut /> Logout
              </button>
            ) : (
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

