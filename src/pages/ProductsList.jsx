import React from 'react';
import { Link } from 'react-router-dom';

const ProductsList = () => (
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

export default ProductsList;
