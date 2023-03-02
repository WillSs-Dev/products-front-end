const genReqBody = (formState) => {
  const { sku, name, price, category, height, width, length, attr_value } = formState;
  
  const requestBody = {
    sku,
    name,
    price: Number(price),
    category,
  };

  if (category === 'furniture') {
    requestBody.attr_value = `${height}x${width}x${length}`;
  } else {
    requestBody.attr_value = attr_value;
  }
  
  return requestBody;
};

export default genReqBody;