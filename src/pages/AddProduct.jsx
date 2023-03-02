import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addProduct } from '../api';
import AttributesForm from '../components/AttributesForm';
import genReqBody from '../utils/genReqBody';
import { initialFormState, validateForm } from '../utils/handleForm';

const AddProducts = () => {
  const [formData, setFormData] = useState(initialFormState);

  const navigate = useNavigate();

  const handleFormChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const { error } = validateForm(formData);

    if (error) {
      return alert(error);
    }
    
    const reqBody = genReqBody(formData);
    
    const { message } = await addProduct(reqBody);
    
    if (message !== 'Product created') {
      return alert(message); 
    }

    navigate('/');
  }; 

  return (
    <>
      <div>
        <h1>Product Add</h1>
        <div>
          <button onClick={handleSubmit}>Save</button>
          <button>
            <Link to="/">Cancel</Link>
          </button>
        </div>
      </div>
      <hr />
      <form id="#product_form">
        <div>
          <label htmlFor="sku">SKU</label>
          <input id="#sku" name="sku" onChange={handleFormChange} />

          <label htmlFor="name">Name</label>
          <input
            id="#name"
            name="name"
            onChange={handleFormChange}
          />

          <label htmlFor="price">Price ($)</label>
          <input
            id="#price"
            name="price"
            onChange={handleFormChange}
          />
        </div>
        <AttributesForm handleFormChange={handleFormChange} />
      </form>
      <hr />
      <span>Scandiweb Test assignment</span>
    </>
  );
};

export default AddProducts;
