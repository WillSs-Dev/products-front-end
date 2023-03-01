import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchProducts from '../api';

const ProductsList = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const requestProucts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    requestProucts();
  }, []);
  console.log(products);

  return (
    <>
      <div>
        <h1>Product List</h1>
        <div>
          <button>
            <Link to="/addproduct">ADD</Link>
          </button>
          <button>MASS DELETE</button>
        </div>
      </div>
      <hr />
      PRODUCTS LIST GOES HERE
      <hr />
      <span>Scandiweb Test assignment</span>
    </>
  );
};

export default ProductsList;
