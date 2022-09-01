import {
  disabled,
  focus,
  variant,
} from '@uie-sessions/shared/ui/button-builders';
import {
  injectable,
  PartialConfig,
} from '@uie-sessions/shared/style-injection';
import { Props } from '../types';
import { iconSize, positionStyle, sizeStyle } from './size';

export { sizeStyle, positionStyle } from './size';

export const STYLE = {
  focus,
  variant,
  disabled,
  position: positionStyle,
  size: sizeStyle,
  iconSize,
};

export const injectableStyle = <P extends Props>() =>
  injectable<P>()(STYLE)<PartialConfig<typeof STYLE, Props>>({
    variant: ['variant'],
    size: ['size'],
    position: ['position'],
    iconSize: ['size', 'position'],
  });

