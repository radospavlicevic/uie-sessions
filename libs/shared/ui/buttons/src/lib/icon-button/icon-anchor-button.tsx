import {
  componentOf,
  factoryOf,
  Injector,
} from '@uie-sessions/shared/style-injection';
import { injectableStyle, STYLE } from './style';
import { AnchorProps } from './types';
import clsx from 'clsx';
import React from 'react';

const iconAnchorButton: Injector<typeof STYLE, AnchorProps> = (
  style,
  { icon, size, variant = 'primary', position = 'leading', children, ...props }
) => {
  const Icon = icon;
  const classes = clsx(
    'inline-flex items-center rounded-md cursor-pointer',
    style.variant(variant),
    style.size(size),
    style.position(position)
  );

  return (
    <a className={classes} {...props}>
      <Icon className={style.iconSize(size, position)} aria-hidden />
      {children}
    </a>
  );
};

export const IconAnchorButton = componentOf(
  STYLE,
  iconAnchorButton,
  'IconButtonLink'
);

export const createIconAnchorButton = factoryOf(
  injectableStyle<AnchorProps>(),
  iconAnchorButton
);
