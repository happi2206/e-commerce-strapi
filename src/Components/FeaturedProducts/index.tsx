import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IProducts } from '../../interfaces/products';
import useFetch from '../../hooks/useFetch';

const index = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const { data } = useFetch(`/products`);
  return <div></div>;
};

export default index;
