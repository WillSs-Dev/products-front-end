import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../api';
import Products from '../components/Products';

const ProductsList = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const requestProucts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    requestProucts();
  }, []);

  return (
    <>
      <div>
        <h1>Product List</h1>
        <div>
          <button>
            <Link to="/add-product">ADD</Link>
          </button>
          <button id="#delete-product-btn">MASS DELETE</button>
        </div>
      </div>
      <hr />
      <Products products={products} />
      <hr />
      <span>Scandiweb Test assignment</span>
    </>
  );
};

export default ProductsList;
