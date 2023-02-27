import React, { useState } from 'react';

const AttributesForm = () => {
  const [productType, setProductType] = useState('DVD');

  const handleChange = ({ target: { value } }) => {
    setProductType(value);
  };

  return (
    <>
      <div>
        <label htmlFor="type">Type Switcher</label>
        <select
          id="#productType"
          name="type"
          onChange={handleChange}
          value={productType}
        >
          <option value="DVD" id="#DVD">
            DVD
          </option>
          <option value="Book" id="#Book">
            Book
          </option>
          <option value="Furniture" id="#Furniture">
            Furniture
          </option>
        </select>
      </div>
      <div>
        {productType === 'DVD' && (
          <>
            <label htmlFor="size">Size (MB)</label>
            <input type="number" id="#size" name="size" />
          </>
        )}
        {productType === 'Book' && (
          <>
            <label htmlFor="weight">Weight (KG)</label>
            <input type="number" id="#weight" name="weight" />
          </>
        )}
        {productType === 'Furniture' && (
          <>
            <label htmlFor="height">Height (CM)</label>
            <input type="number" id="#height" name="height" />
            <label htmlFor="width">Width (CM)</label>
            <input type="number" id="#width" name="width" />
            <label htmlFor="length">Length (CM)</label>
            <input type="number" id="#length" name="length" />
          </>
        )}
      </div>
    </>
  );
};

export default AttributesForm;
