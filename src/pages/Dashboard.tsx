import ProductTable from "../components/ProductTable";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans min-h-screen bg-gray-100 flex flex-col items-center p-8 ">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">Inventory Dashboard</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Manage your inventory efficiently with our intuitive dashboard.
      </p>

      <button
        onClick={() => navigate("/manage-product")}
        className="hover:cursor-pointer mb-6 px-8 py-3 bg-red-800 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-red-900 transition"
      >
        + Add New Product
      </button>

      <ProductTable />
    </div>
  );
};

export default Dashboard;
