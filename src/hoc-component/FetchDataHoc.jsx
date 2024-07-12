import React, { useEffect, useState } from 'react';

const FetchDataHoc = (WrapperComponent, url = '') => {
  return (props) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('There is issue in network call');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      fetchDataFromApi();
    }, [url]);
    return (
      <WrapperComponent
        {...props}
        data={data}
        error={error}
        isLoading={isLoading}
      />
    );
  };
};

export default FetchDataHoc;
