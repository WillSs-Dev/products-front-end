import React from 'react';

const Products = ({ products, handleDelete }) => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 gap-10 m-12">
      {products &&
        products.map((product) => (
          <div
            key={product.sku}
            className="relative border p-2 scale-110 text-slate-900 max-w-xs flex flex-col shadow-sm border rounded-md hover:bg-gray-100 hover:shadow-lg hover:border-gray-300 transition duration-500 ease-in-out"
          >
            <input
              type="checkbox"
              id={product.sku}
              className="delete-checkbox absolute top-1 right-1.5 w-5 h-5"
              onChange={(e) => handleDelete(product.sku)}
            />

            <p className="text-sm font-light">SKU: {product.sku}</p>

            <div className="border border-gray-300 px-1">
              <h3 className="text-xl font-bold">{product.name}</h3>

              <p className="text-sm font-medium">Category: {product.category}</p>
              <p className="text-sm font-medium">Price: {product.price} $</p>
            </div>

            {product.size && <p className='border border-gray-300 px-1 font-medium'>Size: {product.size}</p>}
            {product.weight && <p className='border border-gray-300 px-1 font-medium'>Weight: {product.weight}</p>}
            {product.category === 'furniture' && (
              <div className='border border-gray-300 px-1 font-medium'>
                <p>Height: {product.height}m</p>
                <p>Width: {product.width}m</p>
                <p>Length: {product.length}m</p>
              </div>
            )}
          </div>
        ))}
    </main>
  );
};

export default Products;
