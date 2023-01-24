import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

interface Props {
  image: string;
  text: string;
  id: string;
}

const NewCollectioncard = ({ image, text, id }: Props) => {
  return (
    <Link to={`product/${id}`} className="relative cursor-pointer">
      <img src={image} className="w-96 h-auto" />
      <h3 className="ruhl font-bold absolute bottom-0.5 py-2 rounded inset-x-0 md:mx-6 capitalize text-xs md:text-base lg:text-xl bg-white text-center flex justify-center">
        {text}
      </h3>
    </Link>
  );
};

export default NewCollectioncard;
