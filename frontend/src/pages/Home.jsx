
import { useEffect } from "react";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  useEffect(() => {
  const token = localStorage.getItem('token');
  if(!token || token === undefined){
    navigate('/login');
  }
  },[]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Our Products</h1>
      <ProductList />
    </div>
  );
}

