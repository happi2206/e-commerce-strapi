import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Links from '../Links';
import Cart from '../Cart';

const Navigation = () => {
  const [openCart, setOpenCart] = useState(false);
  return (
    <nav className="pagecontainer pt-10 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <p className="text-lg font-black cursor-pointer">
              <Link to="/">THEA’S</Link>
            </p>
          </div>
        </div>

        <Links />

        <div className="flex items-center space-x-3">
          <span
            className="relative mt-3 cursor-pointer z-50"
            onClick={() => setOpenCart(!openCart)}
          >
            <Icon icon="lucide:shopping-bag" width={25} />

            <div className="-top-3 -right-2 w-3 h-3 absolute  bg-red-500 text-[9px] text-white rounded-[50%] flex items-center justify-center">
              1
            </div>
          </span>
          <div className="border text-sm md:text-base font-bold  border-black px-5 py-2">
            <Link className=" loginlink" to="/">
              Login
            </Link>
          </div>
        </div>
      </div>

      {openCart && <Cart />}
    </nav>
  );
};

export default Navigation;
