import { createStyleBuilder } from '@uie-sessions/shared/style-builder';
import { STYLE } from './style';
import React from 'react';
import { focus } from '../style';
import { AnchorHTMLProps } from '../types';
import clsx from 'clsx';

export const RoundedAnchorButtonBuilder = createStyleBuilder(STYLE, (apply) => {
  const RoundedButton: React.FC<AnchorHTMLProps> = ({
    children,
    href,
    ...rest
  }) => {
    const classes = clsx(
      'inline-flex items-center font-medium rounded-full',
      focus(),
      apply(rest)
    );

    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  };

  return RoundedButton;
});
