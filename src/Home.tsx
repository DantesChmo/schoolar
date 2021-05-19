import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {useSSR} from './useSSR';

const HomePage = () => {
  const inBrowser = useSSR();

  const onClick = () => {
    console.log(window.location);
    console.log(inBrowser);
    console.log('HomePage');
  }

  return (
    <div>
      <h1>Home page</h1>
      <NavLink to="/about">To about</NavLink>
      <button onClick={onClick}>Button</button>
    </div>
  );
};

export {
  HomePage
};
