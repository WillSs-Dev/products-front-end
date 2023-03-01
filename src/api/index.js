const fetchProducts = () => {
  return fetch('https://php-products-api.up.railway.app/')
  .then(response => response.json())
  .then(data => {
    return data;
  })
};

export default fetchProducts;