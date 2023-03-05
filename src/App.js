import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddProduct from './pages/AddProduct/AddProduct';
import ProductsList from './pages/ProductsList/ProductsList';
import './dist/index.css';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <ProductsList />,
  },
  {
    path: '/add-product',
    element: <AddProduct />,
  },
]);

const App = () => (
    <>
      <RouterProvider router={BrowserRouter} />
    </>
);

export default App;
