import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import ProductForm from "../components/ProductForm";

const Products = () => {
  const { role } = useContext(AuthContext);
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Orange", price: 80 },
  ]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleSubmit = (product) => {
    if (editingProduct) {
      // Edit existing
      setProducts(products.map(p => (p.id === editingProduct.id ? { ...p, ...product } : p)));
    } else {
      // Add new
      const newProduct = { ...product, id: Date.now() };
      setProducts([...products, newProduct]);
    }
    setShowForm(false);
    setEditingProduct(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Products</h2>
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-1 rounded"
        >
          + Add Product
        </button>
      </div>

      {showForm && (
        <ProductForm
          initialData={editingProduct}
          onSubmit={handleSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
        />
      )}

      <ul className="space-y-2">
        {products.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>{p.name} - ₹{p.price}</span>
            <button
              onClick={() => handleEdit(p)}
              className="text-sm bg-blue-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
