const HOST = 'https://scandi-challenge-products-api.herokuapp.com/';
// const HOST = 'http://localhost:3001';

const fetchProducts = async () => {
  return fetch(HOST)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const addProduct = async (product) => {
  return fetch(HOST, {
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

const massDeleteProducts = async (skus) => {
  return fetch(HOST, {
    method: 'DELETE',
    Headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({skus}),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export { fetchProducts, addProduct, massDeleteProducts };
