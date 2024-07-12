import React from 'react';
import FetchDataHoc from '../hoc-component/FetchDataHoc';

const Photos = ({ data, error, isLoading }) => {
  if (isLoading) {
    return <p>Loading..............</p>;
  }
  if (error) {
    return <p>Error................</p>;
  }
  return (
    <>
      <p>LIST OF PHOTOS</p>
      {data?.slice(0, 10).map((photo) => {
        return <li key={photo.id}>{photo.title}</li>;
      })}
    </>
  );
};

export default FetchDataHoc(
  Photos,
  'https://jsonplaceholder.typicode.com/photos'
);
