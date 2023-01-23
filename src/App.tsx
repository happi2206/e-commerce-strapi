import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product';
import Products from './pages/Products/Products';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Header from './components/Header';
const App = () => {
  const Layout = () => {
    const isHomePage = useLocation().pathname === '/';

    return (
      <div className="app">
        {isHomePage ? <Header /> : <Navigation />}

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
