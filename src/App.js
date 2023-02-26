import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import Home from './pages/Home';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
