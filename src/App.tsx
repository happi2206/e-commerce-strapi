import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Footer from './Components/Footer';
import Header from './Components/Header';
const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/product/:id',
          element: <Product />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
