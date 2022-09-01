import { createSVGIcon, forwardSVGIconRef } from '@uie-sessions/shared/ui/icons/factory';

const DEFAULT_SOLID_ICON_PROPS = { className: 'h-5 w-5' };

export const createSolidSVGIcon: typeof createSVGIcon = (
  Svg,
  displayName,
) => {
  return createSVGIcon(Svg, displayName, DEFAULT_SOLID_ICON_PROPS);
};

export const forwardSolidSVGIconRef: typeof forwardSVGIconRef = (
  renderSVG,
  displayName,
) => {
  return forwardSVGIconRef(renderSVG, displayName, DEFAULT_SOLID_ICON_PROPS);
};
