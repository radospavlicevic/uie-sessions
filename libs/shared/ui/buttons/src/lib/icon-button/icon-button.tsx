import clsx from 'clsx';
import { STYLE, injectableStyle } from './style';

import React from 'react';
import { Injector, componentOf, factoryOf } from '@uie-sessions/shared/style-injection';
import { ButtonProps } from './types';

const iconButton: Injector<typeof STYLE, ButtonProps> = (
  style,
  { icon, size, variant = 'primary' , position = 'leading', children, ...props }
) => {
  const Icon = icon;
  const classes = clsx(
    'inline-flex items-center rounded-md',
    style.focus(),
    style.variant(variant),
    style.size(size),
    style.disabled(),
    style.position(position)
  );

  return (
    <button className={classes} {...props}>
      <Icon className={style.iconSize(size, position)} aria-hidden />
      {children}
    </button>
  );
};

export const IconButton = componentOf(STYLE, iconButton, 'IconButton');

export const createIconButton = factoryOf(injectableStyle<ButtonProps>(), iconButton);
