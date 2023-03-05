import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../api';
import AttributesForm from '../../components/AttributesForm';
import { genReqBody } from '../../utils/handleResponses';
import { initialFormState, validateForm } from '../../utils/handleForm';
import Footer from '../../components/Footer';

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

  const cancel = () => {
    navigate('/');
  };

  return (
    <>
      <header className="flex justify-around py-3 items-center border box-shadow-lg bg-slate-100">
        <h1 className="text-2xl font-semibold text-slate-900">Product Add</h1>
        <nav className="flex justify-around gap-5">
          <button
            className="bg-slate-700 text-white px-2 py-1 hover:bg-slate-900 transition duration-300 ease-in-out"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="bg-slate-700 text-white px-2 py-1 hover:bg-slate-900 transition duration-300 ease-in-out"
            onClick={cancel}
          >
            Cancel
          </button>
        </nav>
      </header>

      <main className="flex justify-center mb-8">
        <form className="p-2" id="#product_form">
          <div className="flex flex-col my-2">
            <label className="font-regular" htmlFor="sku">
              SKU
            </label>
            <input
              className="shadow border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#sku"
              name="sku"
              onChange={handleFormChange}
            />

            <label className="font-regular" htmlFor="name">
              Name
            </label>
            <input
              className="shadow border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#name"
              name="name"
              onChange={handleFormChange}
            />

            <label className="font-regular" htmlFor="price">
              Price ($)
            </label>
            <input
              className="shadow border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#price"
              name="price"
              onChange={handleFormChange}
            />
          </div>

          <hr />

          <AttributesForm handleFormChange={handleFormChange} />
        </form>
      </main>

      <Footer />
    </>
  );
};

export default AddProducts;
