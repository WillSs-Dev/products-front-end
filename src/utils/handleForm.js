const initialFormState = {
  sku: '',
  name: '',
  price: '',
  category: 'dvd',
};

const validateForm = (formState) => {
  const { sku, name, price, category, height, width, length, attr_value } = formState;
  let error;

  if (!sku || !name || !price) {
    error = 'Please, submit required data';
    return { error };
  }
  
  if (!Number(price)) {
    error = 'Price must be a number';
    return { error };
  }
  
  if (category === 'furniture') {
    if (!height || !width || !length) {
      error = 'Please, submit required data';
      return { error };
    }
    if (!Number(height) || !Number(width) || !Number(length)) {
      error = 'Dimensions must all be numbers';
      return { error };
    }
  };
  
  if (!attr_value && category !== 'furniture') {
    error = 'Please, submit required data';
    // console.log('here');
    return { error };
  }

  if (!Number(attr_value) && category !== 'furniture') {
    error = 'Attribute value must be a number';
    return { error };
  }

  return { error: null };
};

export { initialFormState, validateForm };
