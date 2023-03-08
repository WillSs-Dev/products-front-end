import React, { useState } from 'react';

const AttributesForm = ({ handleFormChange }) => {
  const [productType, setProductType] = useState('dvd');

  const handleTypeChange = ({ target: { name, value } }) => {
    setProductType(value);
    handleFormChange({ target: { name, value } });
  };

  return (
    <div className="my-2">
      <div className="my-1">
        <label className="mr-1 font-medium" htmlFor="type">
          Type Switcher
        </label>
        <select
          className="rounded shadow p-1 font-medium focus:outline-none focus:shadow-outline"
          id="productType"
          name="category"
          onChange={handleTypeChange}
          value={productType}
        >
          <option value="dvd">DVD</option>
          <option value="book">Book</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>

      <div>
        {productType === 'dvd' && (
          <div className="flex flex-col">
            <span className='mb-1'>Please, provide size:</span>
            <label className="text-sm font-light" htmlFor="size">Size (MB)</label>
            <input
              className="shadow border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="size"
              name="attr_value"
              onChange={handleFormChange}
            />
          </div>
        )}
        {productType === 'book' && (
          <div className="flex flex-col">
            <span className='mb-1'>Please, provide weight:</span>
            <label className="text-sm font-light" htmlFor="weight">Weight (KG)</label>
            <input
              className="shadow border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              name="attr_value"
              onChange={handleFormChange}
            />
          </div>
        )}
        {productType === 'furniture' && (
          <div className="flex flex-col gap-1">
            <span className='mb-1' >Please, provide dimensions:</span>
            <label className="text-sm font-light" htmlFor="height">
              Height (M)
            </label>
            <input
              className="shadow border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="height"
              name="height"
              onChange={handleFormChange}
            />
            <label className="text-sm font-light" htmlFor="width">
              Width (M)
            </label>
            <input
              className="shadow border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="width"
              name="width"
              onChange={handleFormChange}
            />
            <label className="text-sm font-light" htmlFor="length">
              Length (M)
            </label>
            <input
              className="shadow border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="length"
              name="length"
              onChange={handleFormChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AttributesForm;
