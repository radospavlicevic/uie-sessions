import { responsiveStyleResolution } from '../utils/responsive-style-resolution';
import { responsiveFull, variant } from '../style';

const SIZE_CONFIG = {
  xs: 'px-3 py-1.5 text-xs',
  s: 'px-3.5 py-2 text-sm leading-4',
  m: 'px-4 py-2 text-sm',
  l: 'px-5 py-2 text-base',
  xl: 'px-6 py-3 text-base',
} as const;

const [resolver, base, responsive] = responsiveStyleResolution(SIZE_CONFIG)({
  '': SIZE_CONFIG,
  sm: {
    xs: 'sm:px-3 sm:py-1.5 sm:text-xs',
    s: 'sm:px-3.5 sm:py-2 sm:text-sm sm:leading-4',
    m: 'sm:px-4 sm:py-2 sm:text-sm',
    l: 'sm:px-5 sm:py-2 sm:text-base',
    xl: 'sm:px-6 sm:py-3 sm:text-base',
  },
  md: {
    xs: 'md:px-3 md:py-1.5 md:text-xs',
    s: 'md:px-3.5 md:py-2 md:text-sm md:leading-4',
    m: 'md:px-4 md:py-2 md:text-sm',
    l: 'md:px-5 md:py-2 md:text-base',
    xl: 'md:px-6 md:py-3 md:text-base',
  },
  lg: {
    xs: 'lg:px-3 lg:py-1.5 lg:text-xs',
    s: 'lg:px-3.5 lg:py-2 lg:text-sm lg:leading-4',
    m: 'lg:px-4 lg:py-2 lg:text-sm',
    l: 'lg:px-5 lg:py-2 lg:text-base',
    xl: 'lg:px-6 lg:py-3 lg:text-base',
  },
  xl: {
    m: 'xl:px-4 xl:py-2 xl:text-sm',
    l: 'xl:px-5 xl:py-2 xl:text-base',
    xl: 'xl:px-6 xl:py-3 xl:text-base',
  },
  '2xl': {
    l: '2xl:px-5 2xl:py-2 2xl:text-base',
    xl: '2xl:px-6 2xl:py-3 2xl:text-base',
  },
});

export const baseSize = base;
export const responsiveSize = responsive;
export const size = resolver;

export const STYLE = {
  variant,
  size,
  full: responsiveFull,
};
