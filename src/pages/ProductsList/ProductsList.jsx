import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts, massDeleteProducts } from '../../api';
import Footer from '../../components/Footer';
import Products from '../../components/Products';
import { formatResponse } from '../../utils/handleResponses';

const ProductsList = () => {
  const [products, setProducts] = useState();
  const [productsToDelete, setProductsToDelete] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const requestProucts = async () => {
      const response = await fetchProducts();
      const data = response.map((product) => formatResponse(product));
      setProducts(data);
    };
    requestProucts();
  }, []);

  const handleDelete = (sku) => {
    if (productsToDelete.includes(sku)) {
      const newProductsArr = productsToDelete.filter(
        (product) => product !== sku
      );
      return setProductsToDelete(newProductsArr);
    }
    const newProductsArr = [...productsToDelete, sku];
    setProductsToDelete(newProductsArr);
  };

  const massDelete = async () => {
    if (!productsToDelete.length) return;

    const { message } = await massDeleteProducts(productsToDelete);
    if (message) {
      window.location.reload();
    }
  };

  const addProduct = () => {
    navigate('/add-product');
  };

  return (
    <>
      <header className="flex justify-around py-3 items-center border box-shadow-lg bg-slate-100">
        <h1 className="text-2xl font-semibold text-slate-900">Product List</h1>

        <nav className="flex justify-around gap-5">
          <button
            className="bg-slate-700 text-white px-2 py-1 hover:bg-slate-900 transition duration-300 ease-in-out"
            onClick={addProduct}
          >
            ADD
          </button>
          <button
            className="bg-slate-700 text-white px-2 py-1 hover:bg-slate-900 transition duration-300 ease-in-out"
            id="delete-product-btn"
            onClick={massDelete}
          >
            MASS DELETE
          </button>
        </nav>
      </header>

      <Products products={products} handleDelete={handleDelete} />

      <Footer />
    </>
  );
};

export default ProductsList;
