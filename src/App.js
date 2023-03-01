import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import ProductsList from './pages/ProductsList';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <ProductsList />,
  },
  {
    path: '/addproduct',
    element: <AddProduct />,
  },
]);

const App = () => (
    <>
      <RouterProvider router={BrowserRouter} />
    </>
);

export default App;
