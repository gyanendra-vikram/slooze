import { useState, useEffect } from "react";

const ProductForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({ name: initialData.name || "", price: initialData.price || "" });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return alert("Fill all fields");
    onSubmit(formData);
    setFormData({ name: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="w-full p-2 rounded" />
      <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" type="number" className="w-full p-2 rounded" />
      <div className="space-x-2">
        <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">Save</button>
        <button type="button" onClick={onCancel} className="bg-gray-400 text-white px-3 py-1 rounded">Cancel</button>
      </div>
    </form>
  );
};

export default ProductForm;
