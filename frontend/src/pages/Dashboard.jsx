



import { useState } from "react";
import { useDispatch } from "react-redux";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import { addProduct, editProduct } from "../store/slices/productSlice";
import { FiPlus } from "react-icons/fi";

export default function Dashboard() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      if (editingProduct) {
        await dispatch(
          editProduct({ id: editingProduct._id, productData: formData })
        );
      } else {
        await dispatch(addProduct(formData));
      }
      setShowForm(false);
      setEditingProduct(null);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <FiPlus /> Add Product
        </button>
      </div>

      {showForm ? (
        <ProductForm
          product={editingProduct}
          onSubmit={handleSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
        />
      ) : (
        <ProductList isAdmin={true} onEdit={handleEdit} />
      )}
    </div>
  );
}

