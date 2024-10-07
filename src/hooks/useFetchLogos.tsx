import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchLogos = (url: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log('API Response:', response.data); // Log API response
        const jsonString = response.data.replace('const logoDetails = ', '').replace(/;$/, '');
        const parsedData = JSON.parse(jsonString);
        console.log('Parsed Data:', parsedData); // Log parsed data
        if (Array.isArray(parsedData)) {
          setData(parsedData);
        } else {
          setData([parsedData]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('API Error:', error); // Log API error
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetchLogos;