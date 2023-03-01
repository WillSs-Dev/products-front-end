import React from 'react';
import { Link } from 'react-router-dom';
import AttributesForm from '../components/AttributesForm';

const AddProducts = () => (
  <>
    <div>
      <h1>Product Add</h1>
      <div>
        <button>Save</button>
        <button><Link to="/">Cancel</Link></button>
      </div>
    </div>
    <hr />
    <form id='#product_form'>
      <div>
        <label htmlFor='sku'>SKU</label>
        <input type='text' id='#sku' name='sku' />
        
        <label htmlFor='name'>Name</label>
        <input type='text' id='#name' name='name' />

        <label htmlFor='price'>Price ($)</label>
        <input type='number' id='#price' name='price' />
      </div>
      <AttributesForm />
    </form>
    <hr />
    <span>Scandiweb Test assignment</span>
  </>
);

export default AddProducts;
