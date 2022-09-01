import { BreakpointKey, ResponsiveConfig } from '../types';

export const full = (value: boolean) => (value ? 'w-full' : 'w-auto');

export const responsiveFull = (() => {
  type FullProp = Partial<Record<BreakpointKey | '', boolean>>;

  const FULL_CONFIG = {
    full: 'w-full',
    auto: 'w-auto',
  } as const;

  const CONFIG: ResponsiveConfig<typeof FULL_CONFIG> = {
    '': FULL_CONFIG,
    sm: {
      full: 'sm:w-full',
      auto: 'sm:w-auto',
    },
    md: {
      full: 'md:w-full',
      auto: 'md:w-auto',
    },
    lg: {
      full: 'lg:w-full',
      auto: 'lg:w-auto',
    },
    xl: {
      full: 'xl:w-full',
      auto: 'xl:w-auto',
    },
    '2xl': {
      full: '2xl:w-full',
      auto: '2xl:w-auto',
    },
  };

  const resolveResponsive = (value: FullProp) => {
    return Object.keys(value)
      .map((k) => {
        const bp = k as BreakpointKey;
        const isFull = value[bp];

        return CONFIG[bp][isFull ? 'full' : 'auto'];
      })
      .join(' ');
  };

  return (value: FullProp | boolean) => {
    if (typeof value === 'boolean') {
      return full(value);
    }

    return resolveResponsive(value);
  };
})();
