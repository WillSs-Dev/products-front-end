import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts, massDeleteProducts } from '../../api';
import Products from '../../components/Products';
import { formatResponse } from '../../utils/handleResponses';

const ProductsList = () => {
  const [products, setProducts] = useState();
  const [productsToDelete, setProductsToDelete] = useState([]);

  useEffect(() => {
    const requestProucts = async () => {
      const response = await fetchProducts();
      const data = response.map((product) => formatResponse(product));
      setProducts(data);
    };
    requestProucts();
  }, []);

  const handleDelete = (sku) => {
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

  return (
    <>
      <div>
        <h1>Product List</h1>
        <div>
          <button>
            <Link to="/add-product">ADD</Link>
          </button>
          <button id="#delete-product-btn" onClick={massDelete}>
            MASS DELETE
          </button>
        </div>
      </div>
      <hr />
      <Products products={products} handleDelete={handleDelete} />
      <hr />
      <span>Scandiweb Test assignment</span>
    </>
  );
};

export default ProductsList;
