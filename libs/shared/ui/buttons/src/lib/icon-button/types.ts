import { ButtonHTMLProps, variant } from '@uie-sessions/shared/ui/button-builders';
import { StyleProp } from '@uie-sessions/shared/types';
import { positionStyle, sizeStyle } from './style';
import { SVGComponent } from '@uie-sessions/shared/ui/icons/factory';
import { AnchorHTMLProps } from '@uie-sessions/shared/ui/button-builders';

export interface Props {
  size: StyleProp<typeof sizeStyle>;
  icon: SVGComponent;
  position?: StyleProp<typeof positionStyle>;
  variant?: StyleProp<typeof variant>;
}

export type ButtonProps = ButtonHTMLProps & Props;
export type AnchorProps = AnchorHTMLProps & Props;
