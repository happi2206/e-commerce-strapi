import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Links from '../Links';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:px-32 px-10 pt-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <p className="text-lg font-black">THEA’S</p>
          </div>
        </div>

        <Links />

        <div className="flex items-center space-x-3">
          <span className="relative mt-3">
            <Icon icon="lucide:shopping-bag" width={25} />

            <div className="-top-7 -right-4 w-3 h-3 absolute  bg-red-500 text-[9px] text-white rounded-[50%] flex items-center justify-center">
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
    </div>
  );
};

export default Navigation;
