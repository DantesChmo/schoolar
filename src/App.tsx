import * as React from 'react';
import {Switch, Route} from 'react-router';
import {enableStaticRendering} from 'mobx-react-lite';
import {useSSR} from './useSSR';
import {AboutPage} from './About';
import {HomePage} from './Home';

const App: React.FunctionComponent<{}> = () => {
  const inBrowser = useSSR();

  enableStaticRendering(!inBrowser);

  return (
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export {
  App
};
