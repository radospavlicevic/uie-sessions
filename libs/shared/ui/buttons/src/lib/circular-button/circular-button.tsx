import {
  ButtonHTMLProps,
  variant,
  focus,
  disabled,
} from '@uie-sessions/shared/ui/button-builders';
import clsx from 'clsx';
import { StyleProp } from '@uie-sessions/shared/types';
import { SVGComponent } from '@uie-sessions/shared/ui/icons/factory';
import {
  componentOf,
  factoryOf,
  injectable,
  Injector,
} from '@uie-sessions/shared/style-injection';
import { size, iconSize } from './style';

const STYLE = {
  variant,
  size,
  iconSize,
  focus,
  disabled,
};

interface Props extends ButtonHTMLProps {
  variant?: StyleProp<typeof variant>;
  size: StyleProp<typeof size>;
  icon: SVGComponent;
}

const injectableStyle = injectable<Props>()(STYLE)({
  variant: ['variant'],
  size: ['size'],
  iconSize: ['size'],
});

const circularButton: Injector<typeof STYLE, Props> = (
  style,
  { icon, variant = 'primary', size, ...props }
) => {
  const Icon = icon;
  const classes = clsx(
    'inline-flex items-center rounded-full border border-transparent',
    style.variant(variant),
    style.size(size),
    style.focus(),
    style.disabled()
  );

  return (
    <button className={classes} {...props}>
      <Icon className={style.iconSize(size)} aria-hidden />
    </button>
  );
};

export const CircularButton = componentOf(STYLE, circularButton);

export const createCircularButton = factoryOf(injectableStyle, circularButton);
