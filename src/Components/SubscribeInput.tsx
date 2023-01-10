import React, { useState } from 'react';

const SubscribeInput = () => {
  const [email, setEmail] = useState('');
  return (
    <div>
      {' '}
      <div className="relative w-52 sm:w-96 ">
        <input
          type="email"
          value={email}
          className="boxshadow text-white placeholder:text-white  z-20 px-3 py-3 text-xs border rounded md:py-4 w-52 sm:w-96  sm:text-sm focus:outline"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className=" flex items-center justify-center absolute top-0 right-[-15px] p-2.5 py-3.5 md:py-4 px-8 border border-white text-xs sm:text-sm bg-[#BD8477] text-white  rounded-lg"
        >
          <span>{'Subscribe'}</span>
        </button>
      </div>
    </div>
  );
};

export default SubscribeInput;
