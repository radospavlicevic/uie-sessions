import {
  AnchorButtonBuilder,
  ButtonBuilder,
} from '@uie-sessions/shared/ui/button-builders';

export const Button = ButtonBuilder().build();
export const PrimaryButton = ButtonBuilder().variant('primary').build();
export const SecondaryButton = ButtonBuilder().variant('secondary').build();
export const WhiteButton = ButtonBuilder().variant('white').build();

export const AnchorButton = AnchorButtonBuilder().build();
