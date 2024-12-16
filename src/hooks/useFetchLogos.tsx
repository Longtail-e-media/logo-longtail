// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useFetchLogos = (url: string) => {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<any>(null);

//   useEffect(() => {
//     axios
//       .get(url)
//       .then((response) => {
//         console.log('API Response:', response.data); // Log API response
//         const jsonString = response.data.replace('const logoDetails = ', '').replace(/;$/, '');
//         const parsedData = JSON.parse(jsonString);
//         console.log('Parsed Data:', parsedData); // Log parsed data
//         if (Array.isArray(parsedData)) {
//           setData(parsedData);
//         } else {
//           setData([parsedData]);
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('API Error:', error); // Log API error
//         setError(error);
//         setLoading(false);
//       });
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetchLogos;

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const cache: { [key: string]: any[] } = {};

const useFetchLogos = (url: string) => {
  const [data, setData] = useState<any[]>(cache[url] || []);
  const [loading, setLoading] = useState(!cache[url]);
  const [error, setError] = useState<any>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current && !cache[url]) {
      axios
        .get(url)
        .then((response) => {
          const jsonString = response.data
            .replace('const logoDetails = ', '')
            .replace(/;$/, '');
          const parsedData = JSON.parse(jsonString);
          if (Array.isArray(parsedData)) {
            cache[url] = parsedData;
            setData(parsedData);
          } else {
            cache[url] = [parsedData];
            setData([parsedData]);
          }
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
      hasFetched.current = true;
    }
  }, [url]);

  return { data, loading, error };
};

export default useFetchLogos;
