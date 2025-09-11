import React from 'react';

const container = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] w-full bg-gradient-to-br from-[#f5ffea] to-[#fffff5]">
      {children}
    </div>
  );
};

export default container;
