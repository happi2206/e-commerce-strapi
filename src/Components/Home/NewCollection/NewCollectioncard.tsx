import React from 'react';

interface Props {
  image: string;
  text: string;
}

const NewCollectioncard = ({ image, text }: Props) => {
  return (
    <div className="relative">
      <img src={image} />

      <h3 className="ruhl font-bold absolute bottom-0.5 py-2 rounded inset-x-0 md:mx-6 capitalize text-xs md:text-base lg:text-xl bg-white text-center flex justify-center">
        {text}
      </h3>
    </div>
  );
};

export default NewCollectioncard;
