import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ComponentThree from './components/ComponentThree';
import ComponentFour from './components/ComponentFour';
import Users from './components/Users';
import Albums from './components/Albums';
import Photos from './components/Photos';
import Comment from './components/Comment';

function App() {
  return (
    <>
      <ComponentOne />
      <Users />
      <hr />
      <ComponentTwo />
      <Albums />
      <hr />
      <ComponentThree />
      <Photos />
      <hr />
      <ComponentFour />
      <Comment />
    </>
  );
}

export default App;
