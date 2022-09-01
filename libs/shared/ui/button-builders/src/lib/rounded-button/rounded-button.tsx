import { createStyleBuilder } from '@uie-sessions/shared/style-builder';
import { ButtonHTMLProps } from '../types';
import clsx from 'clsx';
import { focus, disabled as disabledStyle } from '../style';
import { STYLE } from './style';
import React from 'react';

export const RoundedButtonBuilder = createStyleBuilder(STYLE, (apply) => {
  const RoundedButton: React.FC<ButtonHTMLProps> = ({
    children,
    onClick,
    disabled,
    ...rest
  }) => {
    const classes = clsx(
      'inline-flex items-center font-medium rounded-full',
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

  return RoundedButton;
});
