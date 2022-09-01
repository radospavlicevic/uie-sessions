import { createStyleBuilder } from '@uie-sessions/shared/style-builder';
import { STYLE } from './style';
import React from 'react';
import { AnchorHTMLProps } from '../types';
import clsx from 'clsx';

export const AnchorButtonBuilder = createStyleBuilder(STYLE, (apply) => {
  const AnchorButton: React.FC<AnchorHTMLProps> = ({ children, href, target, ...rest }) => {
    const classes = clsx(
      'inline-flex items-center font-medium rounded cursor-pointer',
      apply(rest),
    );

    return (
      <a className={classes} href={href} target={target}>
        {children}
      </a>
    );
  };

  return AnchorButton;
});
