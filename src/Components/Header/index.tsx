import React from 'react';
import Navigation from '../Navigation';
import './Header.scss';
import Button from '../Base/Button';

const Header = () => {
  return (
    <div className="body md:h-screen">
      <Navigation />
      <img
        src="/images/headeraccesories.svg"
        alt=""
        className="absimg accessories"
      />
      <img src="/images/headerdots.svg" alt="" className="absimg dots" />
      <img
        src="/images/headerrectangle.svg"
        alt=""
        className="absimg rectangle"
      />
      <img
        src="/images/headerrectangle.svg"
        alt=""
        className="absimg rectangle2"
      />

      <div className="pagecontainer flex md:flex-row flex-col justify-between  ">
        <div className="py-20 space-y-8">
          <h1 className="text-4xl lg:text-7xl font-bold leading-10 lg:leading-[6rem] tracking-normal">
            Find The Best Fashion Style For You
          </h1>
          <p className="ruhl text-base md:text-2xl lg:leading-8 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            id convallis gravida commodo, nam.
          </p>

          <Button>SHOP NOW</Button>
        </div>

        <div className="hidden md:block w-6/12  md:w-11/12 lg:w-6/12">
          <img
            src="/images/mansweater.jpg"
            className="w-full h-auto object-cover mainimg sm:rounded-bl-[30%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
