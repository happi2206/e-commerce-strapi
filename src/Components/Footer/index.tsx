import React from 'react';
import Links from '../Links';
import SubscribeInput from '../SubscribeInput';
const Footer = () => {
  return (
    <div className="bg-[#2D1F1A] py-10 text-white">
      <div className="flex justify-center">
        <Links isFooter />
      </div>

      <div className="md:py-20 space-y-10 lg:space-y-0 lg:px-32 px-10 flex lg:flex-row flex-col justify-between">
        <div>
          <p className="font-bold  pb-3">
            Subscribe to our Fashion Newsletter for Daily Fashion Updates.
          </p>
          <SubscribeInput />{' '}
        </div>

        <div className="flex space-x-12">
          <div>
            <p className="font-semibold">Help</p>

            <ul className="pt-5">
              <li className="capitalize opacity-30">How does it work</li>
              <li className="capitalize opacity-30">Where to ask questions</li>
              <li className="capitalize opacity-30">How to pay</li>
              <li className="capitalize opacity-30">What is needed to start</li>
            </ul>
          </div>{' '}
          <div>
            <p className="font-semibold">Contact</p>

            <ul className="pt-5">
              <li className="capitalize opacity-30">How does it work</li>
              <li className="capitalize opacity-30">Where to ask questions</li>
              <li className="capitalize opacity-30">How to pay</li>
              <li className="capitalize opacity-30">What is needed to start</li>
            </ul>
          </div>{' '}
        </div>
      </div>
    </div>
  );
};

export default Footer;
