import { StyleProp } from '@uie-sessions/shared/types';
import {
  baseSize,
  responsiveSize,
  responsiveStyleResolution,
  size as resolver
} from '@uie-sessions/shared/ui/button-builders';

type SizeProp = Exclude<StyleProp<typeof baseSize>, 'xs'>;
type ResponsiveProp = StyleProp<typeof responsiveSize>;
type ResponsiveSizeProp = {
  [K in keyof ResponsiveProp]: Exclude<ResponsiveProp[K], 'xs'>;
};

export const sizeStyle = (v: SizeProp | ResponsiveSizeProp) => resolver(v);

const ICON_SIZE_CONFIG = {
  leading: {
    s: 'h-4 w-4 -ml-0.5 mr-2',
    m: 'h-5 w-5 -ml-1 mr-2',
    l: 'h-5 w-5 -ml-1 mr-3',
    xl: 'h-5 w-5 -ml-1 mr-3',
  } as const,
  trailing: {
    s: 'h-4 w-4 ml-2 -mr-0.5',
    m: 'h-5 w-5 ml-2 -mr-1',
    l: 'h-5 w-5 ml-3 -mr-1',
    xl: 'h-5 w-5 ml-3 -mr-1',
  } as const,
};

type Position = keyof typeof ICON_SIZE_CONFIG;

export const positionStyle = (v: Position) => ({
  'flex-row-reverse': v === 'trailing',
});

export const iconSize = (() => {
  const [leadSize] = responsiveStyleResolution(ICON_SIZE_CONFIG.leading)({
    '': ICON_SIZE_CONFIG.leading,
    sm: {
      s: 'sm:h-4 sm:w-4 sm:-ml-0.5 sm:mr-2',
      m: 'sm:h-5 sm:w-5 sm:-ml-1 sm:mr-2',
      l: 'sm:h-5 sm:w-5 sm:-ml-1 sm:mr-3',
      xl: 'sm:h-5 sm:w-5 sm:-ml-1 sm:mr-3',
    },
    md: {
      s: 'md:h-4 md:w-4 md:-ml-0.5 md:mr-2',
      m: 'md:h-5 md:w-5 md:-ml-1 md:mr-2',
      l: 'md:h-5 md:w-5 md:-ml-1 md:mr-3',
      xl: 'md:h-5 md:w-5 md:-ml-1 md:mr-3',
    },
    lg: {
      s: 'lg:h-4 lg:w-4 lg:-ml-0.5 lg:mr-2',
      m: 'lg:h-5 lg:w-5 lg:-ml-1 lg:mr-2',
      l: 'lg:h-5 lg:w-5 lg:-ml-1 lg:mr-3',
      xl: 'lg:h-5 lg:w-5 lg:-ml-1 lg:mr-3',
    },
    xl: {
      m: 'xl:h-5 xl:w-5 xl:-ml-1 xl:mr-2',
      l: 'xl:h-5 xl:w-5 xl:-ml-1 xl:mr-3',
      xl: 'xl:h-5 xl:w-5 xl:-ml-1 xl:mr-3',
    },
    '2xl': {
      l: '2xl:h-5 2xl:w-5 2xl:-ml-1 2xl:mr-3',
      xl: '2xl:h-5 2xl:w-5 2xl:-ml-1 2xl:mr-3',
    },
  });

  const [trailSize] = responsiveStyleResolution(ICON_SIZE_CONFIG.trailing)({
    '': ICON_SIZE_CONFIG.trailing,
    sm: {
      s: 'sm:h-4 sm:w-4 sm:ml-2 sm:-mr-0.5',
      m: 'sm:h-5 sm:w-5 sm:ml-2 sm:-mr-1',
      l: 'sm:h-5 sm:w-5 sm:ml-3 sm:-mr-1',
      xl: 'sm:h-5 sm:w-5 sm:ml-3 sm:-mr-1',
    },
    md: {
      s: 'md:h-4 md:w-4 md:ml-2 md:-mr-0.5',
      m: 'md:h-5 md:w-5 md:ml-2 md:-mr-1',
      l: 'md:h-5 md:w-5 md:ml-3 md:-mr-1',
      xl: 'md:h-5 md:w-5 md:ml-3 md:-mr-1',
    },
    lg: {
      s: 'lg:h-4 lg:w-4 lg:ml-2 lg:-mr-0.5',
      m: 'lg:h-5 lg:w-5 lg:ml-2 lg:-mr-1',
      l: 'lg:h-5 lg:w-5 lg:ml-3 lg:-mr-1',
      xl: 'lg:h-5 lg:w-5 lg:ml-3 lg:-mr-1',
    },
    xl: {
      m: 'xl:h-5 xl:w-5 xl:ml-2 xl:-mr-1',
      l: 'xl:h-5 xl:w-5 xl:ml-3 xl:-mr-1',
      xl: 'xl:h-5 xl:w-5 xl:ml-3 xl:-mr-1',
    },
    '2xl': {
      l: '2xl:h-5 2xl:w-5 2xl:ml-3 2xl:-mr-1',
      xl: '2xl:h-5 2xl:w-5 2xl:ml-3 2xl:-mr-1',
    },
  });

  return (size: StyleProp<typeof sizeStyle>, position: Position) =>
    ({
      leading: leadSize,
      trailing: trailSize,
    }[position](size));
})();
