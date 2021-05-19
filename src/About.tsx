import * as React from 'react';
import {NavLink} from 'react-router-dom';

const AboutPage: React.FunctionComponent<{}> = () => {
  const onClick = () => {
    console.log('About');
  };

  return (
    <div>
      <h1>About page</h1>
      <NavLink to='/'>To main</NavLink>
      <button onClick={onClick}>Button</button>
    </div>
  );
};

export {
  AboutPage
};
