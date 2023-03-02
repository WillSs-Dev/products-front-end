const fetchProducts = async () => {
  return fetch('https://php-products-api.up.railway.app/')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const addProduct = async (product) => {
  return fetch('https://php-products-api.up.railway.app/', {
    method: 'POST',
    Headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export { fetchProducts, addProduct };
