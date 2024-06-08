// components/Title.js
import React from 'react';

const Title = () => {
  return (
    <div className="flex justify-center items-center ">
      <h1 className="title text-white font-bold text-4xl md:text-4xl lg:text-6xl animate-bounce">
      <span role="img" aria-label="mail">📧</span> Quick Mail <span role="img" aria-label="fast">⚡</span>
      </h1>
    </div>
  );
};

export default Title;
