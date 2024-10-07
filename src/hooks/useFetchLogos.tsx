import { useState, useEffect } from 'react';
import axios from 'axios';
import { Logo } from '../interfaces/types';

const API_URL = 'https://longtail.info/logo/dynamic/api/v1/getProperties.php';

export const useFetchLogos = () => {
  const [logos, setLogos] = useState<Logo[]>([]); // Default to an empty array
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await axios.get(API_URL);
        setLogos(response.data);
      } catch (error) {
        setError('Failed to fetch logos');
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  return { logos, loading, error };
};
