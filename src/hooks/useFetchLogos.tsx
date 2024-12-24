// import { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// const cache: { [key: string]: any[] } = {};

// const useFetchLogos = (url: string) => {
//   const [data, setData] = useState<any[]>(cache[url] || []);
//   const [loading, setLoading] = useState(!cache[url] && !localStorage.getItem(url));
//   const [error, setError] = useState<any>(null);
//   const hasFetched = useRef(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const localData = localStorage.getItem(url);

//         if (localData) {
//           // If data exists in localStorage, use it
//           const parsedData = JSON.parse(localData);
//           cache[url] = parsedData; // Sync with in-memory cache
//           setData(parsedData);
//           setLoading(false);
//         } else if (!cache[url]) {
//           // Fetch from API if not in cache or localStorage
//           const response = await axios.get(url);
//           const jsonString = response.data
//             .replace('const logoDetails = ', '')
//             .replace(/;$/, '');
//           const parsedData = JSON.parse(jsonString);

//           const normalizedData = Array.isArray(parsedData) ? parsedData : [parsedData];

//           // Save fetched data to cache and localStorage
//           cache[url] = normalizedData;
//           localStorage.setItem(url, JSON.stringify(normalizedData));
//           setData(normalizedData);
//           setLoading(false);
//         }
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     if (!hasFetched.current) {
//       fetchData();
//       hasFetched.current = true;
//     }
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetchLogos;

import { useState, useEffect } from 'react';
import axios from 'axios';

const cache: { [key: string]: any[] } = {};

const useFetchLogos = (url: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch data from the API
        const response = await axios.get(url);
        const jsonString = response.data
          .replace('const logoDetails = ', '')
          .replace(/;$/, '');
        const parsedData = JSON.parse(jsonString);

        const normalizedData = Array.isArray(parsedData)
          ? parsedData
          : [parsedData];

        // Update cache and localStorage
        cache[url] = normalizedData;
        localStorage.setItem(url, JSON.stringify(normalizedData));

        setData(normalizedData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // Always re-fetch on refresh
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchLogos;
