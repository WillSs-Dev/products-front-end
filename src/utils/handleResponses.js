const genReqBody = (formState) => {
  const { sku, name, price, category, height, width, length, attr_value } =
    formState;

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

const formatResponse = (product) => {
  const { dimensions } = product;

  if (dimensions) {
    const [height, width, length] = dimensions.split('x');
    return {
      ...product,
      height,
      width,
      length,
    };
  }

  return product;
};

export { genReqBody, formatResponse };
