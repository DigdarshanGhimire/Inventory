import { createContext, useState } from 'react';

interface InventoryContextType {
  products: {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
    supplier: string;
  }[];
  setProducts: React.Dispatch<React.SetStateAction<{
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
    supplier: string;
  }[]>>;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined); 

export const InventoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000, quantity: 5, supplier: 'TechSupplier' },
    { id: 2, name: 'Mouse', category: 'Electronics', price: 50, quantity: 20, supplier: 'GadgetsWorld' }
  ]);

  return (
    <InventoryContext.Provider value={{ products, setProducts }}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryContext;
