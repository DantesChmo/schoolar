import * as React from 'react';

export function useSSR() {
  const [inBrowser, setInBrowser] = React.useState(typeof window !== 'undefined');

  React.useEffect(() => {
    setInBrowser(typeof window !== 'undefined');
    return () => {
      setInBrowser(false);
    }
  }, []);

  return inBrowser;
}