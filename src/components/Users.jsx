import React from 'react';
import FetchDataHoc from '../hoc-component/FetchDataHoc';

const Users = ({ data, error, isLoading }) => {
  if (isLoading) {
    return <p>Loading..............</p>;
  }
  if (error) {
    return <p>Error................</p>;
  }
  return (
    <>
      <p>LIST OF USERS</p>
      {data?.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </>
  );
};

export default FetchDataHoc(
  Users,
  'https://jsonplaceholder.typicode.com/users'
);
