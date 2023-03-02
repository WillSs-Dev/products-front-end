import React from 'react';

const Products = ({ products }) => {
  return (
    <div>
      {products &&
        products.map((product) => (
          <div key={product.sku}>
            <input
              type="checkbox"
              id={product.sku}
              className=".delete-checkbox"
            />
            <h4>SKU: {product.sku}</h4>
            <h3>{product.name}</h3>

            <p>Category: {product.category}</p>
            <p>Price: {product.price} $</p>

            {product.size && <p>Size: {product.size}</p>}
            {product.weight && <p>Weight: {product.weight}</p>}
            {product.category === 'furniture' && (
              <div>
                <p>Height: {product.height}</p>
                <p>Width: {product.width}</p>
                <p>Length: {product.length}</p>
              </div>
            )}
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Products;
