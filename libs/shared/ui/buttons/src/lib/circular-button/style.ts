import { responsiveStyleResolution } from '@uie-sessions/shared/ui/button-builders';

const SIZE = {
  xs: 'p-1',
  s: 'p-1.5',
  m: 'p-2',
  l: 'p-2',
  xl: 'p-3',
} as const;

const ICON_SIZE = {
  xs: 'h-5 w-5',
  s: 'h-5 w-5',
  m: 'h-5 w-5',
  l: 'h-6 w-6',
  xl: 'h-6 w-6',
} as const;

type SizeResolver = typeof sizeResolver;

const [sizeResolver] = responsiveStyleResolution(SIZE)({
  '': SIZE,
  sm: {
    xs: 'sm:p-1',
    s: 'sm:p-1.5',
    m: 'sm:p-2',
    l: 'sm:p-2',
    xl: 'sm:p-3',
  },
  md: {
    xs: 'md:p-1',
    s: 'md:p-1.5',
    m: 'md:p-2',
    l: 'md:p-2',
    xl: 'md:p-3',
  },
  lg: {
    xs: 'lg:p-1',
    s: 'lg:p-1.5',
    m: 'lg:p-2',
    l: 'lg:p-2',
    xl: 'lg:p-3',
  },
  xl: {
    m: 'xl:p-2',
    l: 'xl:p-2',
    xl: 'xl:p-3',
  },
  '2xl': {
    l: '2xl:p-2',
    xl: '2xl:p-3',
  },
});

const [iconSizeResolver] = responsiveStyleResolution(ICON_SIZE)({
  '': ICON_SIZE,
  sm: {
    xs: 'sm:h-5 sm:w-5',
    s: 'sm:h-5 sm:w-5',
    m: 'sm:h-5 sm:w-5',
    l: 'sm:h-6 sm:w-6',
    xl: 'sm:h-6 sm:w-6',
  },
  md: {
    xs: 'md:h-5 md:w-5',
    s: 'md:h-5 md:w-5',
    m: 'md:h-5 md:w-5',
    l: 'md:h-6 md:w-6',
    xl: 'md:h-6 md:w-6',
  },
  lg: {
    xs: 'lg:h-5 lg:w-5',
    s: 'lg:h-5 lg:w-5',
    m: 'lg:h-5 lg:w-5',
    l: 'lg:h-6 lg:w-6',
    xl: 'lg:h-6 lg:w-6',
  },
  xl: {
    m: 'xl:h-5 xl:w-5',
    l: 'xl:h-6 xl:w-6',
    xl: 'xl:h-6 xl:w-6',
  },
  '2xl': {
    l: '2xl:h-6 2xl:w-6',
    xl: '2xl:h-6 2xl:w-6',
  },
});

export const size = sizeResolver;
export const iconSize: SizeResolver = iconSizeResolver;
