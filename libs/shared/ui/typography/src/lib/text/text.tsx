import React from 'react';

export interface TextProps {
  text: string;
}

export function Text({text}: TextProps) {
  return (
    <p className='text-2xl font-bold leading-7 text-indigo-600 sm:text-3xl sm:truncate'>
      {text}
    </p>
  );
}

export default Text;
