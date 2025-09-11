import { useEffect } from 'react';

const AutoScrollUp = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>{children}</div>;
};

export default AutoScrollUp;
