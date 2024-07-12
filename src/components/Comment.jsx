import React from 'react';
import FetchDataHoc from '../hoc-component/FetchDataHoc';

const Comments = ({ data, error, isLoading }) => {
  if (isLoading) {
    return <p>Loading..............</p>;
  }
  if (error) {
    return <p>Error................</p>;
  }
  return (
    <>
      <p>LIST OF COMMENTS</p>
      {data?.slice(0, 10).map((comment) => {
        return <li key={comment.id}>{comment.title}</li>;
      })}
    </>
  );
};

export default FetchDataHoc(
  Comments,
  'https://jsonplaceholder.typicode.com/photos'
);
