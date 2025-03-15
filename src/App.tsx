import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InventoryProvider } from './context/InventoryContext';
import Dashboard from './pages/Dashboard';
import ProductDetail from './pages/ProductDetail';
import ProductForm from './pages/ProductForm';


function App() {
  return (
    <InventoryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/manage-product/:id?" element={<ProductForm />} />
          <Route path="/edit/:id" element={<ProductForm />} />
        </Routes>
      </Router>
    </InventoryProvider>
  );

 
}

export default App
