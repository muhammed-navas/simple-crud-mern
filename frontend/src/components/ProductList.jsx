


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { fetchProducts, removeProduct } from "../store/slices/productSlice";

export default function ProductList({ isAdmin = false, onEdit }) {
  const dispatch = useDispatch();
  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await dispatch(removeProduct(id));
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600 text-center">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product._id} className="bg-white p-4 rounded-lg shadow">
          <img
            src={product.image || "https://via.placeholder.com/300"}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="mt-2 text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-lg font-bold">${product.price}</span>
            <span className="text-sm text-gray-500">
              Stock: {product.stock}
            </span>
          </div>
          {isAdmin && (
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => onEdit(product)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
              >
                <FiEdit />
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-full"
              >
                <FiTrash2 />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

