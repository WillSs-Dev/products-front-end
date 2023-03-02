import React, { useState } from 'react';

const AttributesForm = ({ handleFormChange }) => {
  const [productType, setProductType] = useState('dvd');

  const handleTypeChange = ({ target: { name, value } }) => {
    setProductType(value);
    handleFormChange({ target: { name, value } });
  };

  return (
    <>
      <div>
        <label htmlFor="type">Type Switcher</label>
        <select
          id="#productType"
          name="category"
          onChange={handleTypeChange}
          value={productType}
        >
          <option value="dvd" id="#DVD">
            DVD
          </option>
          <option value="book" id="#Book">
            Book
          </option>
          <option value="furniture" id="#Furniture">
            Furniture
          </option>
        </select>
      </div>
      <div>
        {productType === 'dvd' && (
          <>
            <span>Please, provide size</span>
            <label htmlFor="size">Size (MB)</label>
            <input id="#size" name="attr_value" onChange={handleFormChange} />
          </>
        )}
        {productType === 'book' && (
          <>
            <span>Please, provide weight</span>
            <label htmlFor="weight">Weight (KG)</label>
            <input id="#weight" name="attr_value" onChange={handleFormChange} />
          </>
        )}
        {productType === 'furniture' && (
          <>
            <span>Please, provide dimensions:</span>
            <label htmlFor="height">Height (CM)</label>
            <input
              id="#height"
              name="height"
              onChange={handleFormChange}
            />
            <label htmlFor="width">Width (CM)</label>
            <input
              id="#width"
              name="width"
              onChange={handleFormChange}
            />
            <label htmlFor="length">Length (CM)</label>
            <input
              id="#length"
              name="length"
              onChange={handleFormChange}
            />
          </>
        )}
      </div>
    </>
  );
};

export default AttributesForm;
