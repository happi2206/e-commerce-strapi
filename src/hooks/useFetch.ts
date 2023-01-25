import { useEffect, useState } from 'react';
import { apiRequest } from '../apiRequest';
import { IProducts } from '../interfaces/products';

const useFetch = (url: string) => {
  const [data, setData] = useState<IProducts[] | IProducts>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiRequest.get(url);
        setData(res.data.data);
      } catch (err) {}
    };
    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;
