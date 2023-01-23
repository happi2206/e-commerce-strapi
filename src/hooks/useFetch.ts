import { useEffect, useState } from 'react';
import { apiRequest } from '../apiRequest';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);

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
