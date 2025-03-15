import React, { useContext } from "react";
import InventoryContext from "../context/InventoryContext";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const useInventory = () => useContext(InventoryContext);

const ProductTable: React.FC = () => {
  const context = useInventory();
  const navigate = useNavigate();

  if (!context) {
    return <div>Loading...</div>;
  }

  const { products, setProducts } = context;

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  return (
    <div className=" font-sans p-6 min-h-screen bg-gray-100 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Inventory Products</h2>
      <div className="flex flex-col items-center gap-10 w-full max-w-4xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="  bg-red-800 text-white shadow-xl rounded-2xl p-8 transition transform hover:scale-105 hover:shadow-2xl border border-red-900 w-full max-w-md bg-opacity-90"
          >
            <h3 className="text-3xl font-extrabold mb-4">{product.name}</h3>
            <p className="text-xl font-medium">Category: {product.category}</p>
            <p className="text-xl font-medium">Price: ${product.price}</p>
            <p className="text-xl font-medium">Quantity: {product.quantity}</p>
            <p className="text-xl font-medium">Supplier: {product.supplier}</p>
            <div className="flex justify-between mt-8">
              <button
                onClick={() => navigate(`/edit/${product.id}`)}
                className="text-white hover:text-gray-200 text-2xl transition hover:cursor-pointer"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="text-white hover:text-gray-200 text-2xl transition hover:cursor-pointer"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
