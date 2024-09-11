import React, { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); // To track selected product for detail view

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-10 text-center">
        <h1 className="text-5xl font-bold mb-4 animate-pulse">
          Discover Our Exclusive Products
        </h1>
        <p className="text-lg mb-8">
          Find the perfect item that surprises and delights!
        </p>
        <button className="bg-white text-indigo-600 py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition duration-300">
          Explore Now
        </button>
      </div>

      <div className="container mx-auto py-12">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        ) : selectedProduct ? (
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="h-96 w-full object-cover mb-6 rounded-lg"
            />
            <h3 className="text-3xl font-bold mb-4">{selectedProduct.title}</h3>
            <p className="text-xl text-gray-700 mb-4">
              ${selectedProduct.price}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {selectedProduct.description}
            </p>
            <button
              onClick={handleBack}
              className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500 transition duration-300"
            >
              Back to Products
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-4xl font-bold text-center mb-12">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-64 w-full object-cover mb-6 rounded-lg"
                  />
                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">${product.price}</p>
                  <button
                    onClick={() => handleViewDetails(product)}
                    className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500 transition duration-300"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="bg-indigo-600 text-white py-8 text-center">
        <p className="text-lg">
          Explore our collections and find something unique for you!
        </p>
      </div>
    </div>
  );
}
