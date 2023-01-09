import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navigation.scss';
import { Icon } from '@iconify/react';
// import Cart from '../Cart/Cart';
// import { useSelector } from 'react-redux';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  // const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <p className="logo">THEA’S</p>
          </div>
        </div>

        <div className="center">
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/3">
              Kids
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/3">
              Collection
            </Link>
          </div>
        </div>

        <div className="right">
          <span>
            <Icon icon="lucide:shopping-bag" width={25} />

            <div className="alertsymbol">1</div>
          </span>
          <div className="item">
            <Link className=" loginlink" to="/">
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* {open && <Cart />} */}
    </div>
  );
};

export default Navigation;
