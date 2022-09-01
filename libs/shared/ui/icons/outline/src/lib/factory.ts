import { createSVGIcon, forwardSVGIconRef } from '@uie-sessions/shared/ui/icons/factory';

const DEFAULT_OUTLINE_ICON_PROPS = { className: 'h-6 w-6' };

export const createOutlineSVGIcon: typeof createSVGIcon = (
  Svg,
  displayName,
) => {
  return createSVGIcon(Svg, displayName, DEFAULT_OUTLINE_ICON_PROPS);
};

export const forwardOutlineSVGIconRef: typeof forwardSVGIconRef = (
  renderSVG,
  displayName,
) => {
  return forwardSVGIconRef(renderSVG, displayName, DEFAULT_OUTLINE_ICON_PROPS);
};
