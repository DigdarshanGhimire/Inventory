import InventoryContext from "../context/InventoryContext";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

const useInventory = () => useContext(InventoryContext);

const ProductForm = () => {
  const context: any = useInventory();
  const { products, setProducts } = context;
  const navigate = useNavigate();
  const { id }: any = useParams();
  const isEditing = Boolean(id);
  
  const [formData, setFormData] = useState({ 
    name: '', category: '', price: '', quantity: '', supplier: '', description: '' 
  });

  useEffect(() => {
    if (isEditing) {
      const product = products.find((p: any) => p.id === parseInt(id));
      if (product) setFormData(product);
    }
  }, [id, isEditing, products]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isEditing) {
      setProducts(products.map((p: any) => (p.id === parseInt(id) ? { ...p, ...formData } : p)));
    } else {
      setProducts([...products, { id: products.length + 1, ...formData }]);
    }
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-96 border border-red-800">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          {isEditing ? "Edit Product" : "Add Product"}
        </h2>

        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required 
          className="w-full p-3 border rounded-lg mb-3 text-lg focus:border-red-800 focus:ring-1 focus:ring-red-800" />
        
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required 
          className="w-full p-3 border rounded-lg mb-3 text-lg focus:border-red-800 focus:ring-1 focus:ring-red-800" />
        
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required 
          className="w-full p-3 border rounded-lg mb-3 text-lg focus:border-red-800 focus:ring-1 focus:ring-red-800" />
        
        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required 
          className="w-full p-3 border rounded-lg mb-3 text-lg focus:border-red-800 focus:ring-1 focus:ring-red-800" />
        
        <input type="text" name="supplier" placeholder="Supplier" value={formData.supplier} onChange={handleChange} required 
          className="w-full p-3 border rounded-lg mb-3 text-lg focus:border-red-800 focus:ring-1 focus:ring-red-800" />
        
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} 
          className="w-full p-3 border rounded-lg mb-6 text-lg focus:border-red-800 focus:ring-1 focus:ring-red-800"></textarea>
        
        <button type="submit" className="hover:cursor-pointer w-full bg-red-800 text-white p-3 text-lg font-semibold rounded-lg hover:bg-red-900 transition">
          {isEditing ? "Update Product" : "Save Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
