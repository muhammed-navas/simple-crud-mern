// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   description: yup.string().required("Description is required"),
//   price: yup
//     .number()
//     .positive("Price must be positive")
//     .required("Price is required"),
//   stock: yup
//     .number()
//     .positive("Stock must be positive")
//     .required("Stock is required"),
//   image: yup
//     .string()
//     .url("Image must be a valid URL")
//     .required("Image URL is required"),
// });

// const ProductForm = ({ onSubmit, defaultValues }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues,
//   });

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Name</label>
//         <input {...register("name")} />
//         {errors.name && <p>{errors.name.message}</p>}
//       </div>
//       <div>
//         <label>Description</label>
//         <input {...register("description")} />
//         {errors.description && <p>{errors.description.message}</p>}
//       </div>
//       <div>
//         <label>Price</label>
//         <input type="number" {...register("price")} />
//         {errors.price && <p>{errors.price.message}</p>}
//       </div>
//       <div>
//         <label>Stock</label>
//         <input type="number" {...register("stock")} />
//         {errors.stock && <p>{errors.stock.message}</p>}
//       </div>
//       <div>
//         <label>Image URL</label>
//         <input {...register("image")} />
//         {errors.image && <p>{errors.image.message}</p>}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ProductForm;



"use client";

import { useState, useEffect } from "react";
import { FiSave, FiX } from "react-icons/fi";

export default function ProductForm({ product, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <FiX /> Cancel
        </button>
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <FiSave /> Save
        </button>
      </div>
    </form>
  );
}

