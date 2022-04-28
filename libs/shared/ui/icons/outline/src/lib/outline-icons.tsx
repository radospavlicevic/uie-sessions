import {
  createSVGIcon,
  forwardSVGIconRef,
} from '@uie-sessions/shared/ui/icons/factory';

const DEFAULT_OUTLINE_ICON_PROPS = { className: 'h-6 w-6' };

const createOutlineSVGIcon: typeof createSVGIcon = (
  Svg,
  displayName,
  defaultProps = DEFAULT_OUTLINE_ICON_PROPS
) => {
  return createSVGIcon(Svg, displayName, defaultProps);
};

const forwardOutlineSVGIconRef: typeof forwardSVGIconRef = (
  renderSVG,
  displayName,
  defaultProps = DEFAULT_OUTLINE_ICON_PROPS
) => {
  return forwardSVGIconRef(renderSVG, displayName, defaultProps);
};

export const XIcon = createOutlineSVGIcon(
  (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  'XIcon'
);

export const MenuIcon = forwardOutlineSVGIconRef(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  ),
  'MenuIcon'
);
