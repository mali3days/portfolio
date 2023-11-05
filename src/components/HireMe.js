import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className="fixed flex items-center justify-center overflow-hidden left-4 bottom-4">
      <div className="relative items-center justify-center w-48 h-auto">
        <CircularText className="fill-dart animate-spin-slow dark:fill-light" />
        <Link className='absolute flex items-center justify-center w-20 h-20 font-semibold -translate-x-1/2 -translate-y-1/2 border border-solid rounded-full shadow-md left-1/2 top-1/2 bg-dark text-light border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light' href="mailto:mali3days@gmail.com">Hire Me</Link>
      </div>
    </div>
  );
};

export default HireMe;
