import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.scss';
import { Button } from '@mui/material';
const Header = () => {
  return (
    <div className="body">
      <Navigation />
      <img src="/images/headeraccesories.svg" alt="" className="accessories" />
      <img src="/images/headerdots.svg" alt="" className="dots" />
      <img src="/images/headerrectangle.svg" alt="" className="rectangle" />
      <img src="/images/headerrectangle.svg" alt="" className="rectangle2" />

      <div className="content container">
        <div>
          <h1>Find The Best Fashion Style For You</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            id convallis gravida commodo, nam.
          </p>

          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
