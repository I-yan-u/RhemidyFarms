import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ content, icon, link, color, otherClass, ...props }) => {
  const navigate = useNavigate();
  const Inner = (
    <>
      {icon && (
        <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">
          {icon}
        </span>
      )}
      {content}
    </>
  );

  return (
    <button
      type="button"
      {...props}
      onClick={link ? () => navigate(link) : null}
      className={`flex items-center group justify-center rounded-full shadow-md px-4 py-2 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
        color
          ? color
          : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:bg-green-800 focus:ring-green-500'
      } ${otherClass}`}
    >
      {Inner}
    </button>
  );
};

export default Button;
