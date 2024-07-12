import React from 'react';
import FetchDataHoc from '../hoc-component/FetchDataHoc';

const Albums = ({ data, error, isLoading }) => {
  if (isLoading) {
    return <p>Loading..............</p>;
  }
  if (error) {
    return <p>Error................</p>;
  }
  return (
    <>
      <p>LIST OF ALBUMS</p>
      {data?.slice(0, 10).map((album) => {
        return <li key={album.id}>{album.title}</li>;
      })}
    </>
  );
};

export default FetchDataHoc(
  Albums,
  'https://jsonplaceholder.typicode.com/albums'
);
