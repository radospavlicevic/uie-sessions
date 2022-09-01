import { createStyleBuilder } from '@uie-sessions/shared/style-builder';
import { focus, disabled as disabledStyle } from '../style';
import { ButtonHTMLProps } from '../types';
import clsx from 'clsx';
import React from 'react';
import { STYLE } from './style';

export const ButtonBuilder = createStyleBuilder(STYLE, (apply) => {
  const Button: React.FC<ButtonHTMLProps> = ({
    children,
    onClick,
    disabled,
    ...rest
  }) => {
    const classes = clsx(
      'inline-flex items-center font-medium rounded',
      focus(),
      disabledStyle(),
      apply(rest)
    );

    return (
      <button className={classes} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  };

  return Button;
});
