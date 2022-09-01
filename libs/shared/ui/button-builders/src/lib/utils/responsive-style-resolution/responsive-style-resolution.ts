import { BreakpointKey, ResponsiveConfig, ResponsiveProp } from '../../types';
import { StyleProp } from '@uie-sessions/shared/types';

// const arrayToString = (
//   obj: Partial<Record<string, readonly string[]>>
// ) => {
//   return Object.keys(obj).reduce<Record<string, string>>((acc, key) => {
//     acc[key] = obj[key]?.join(' ') as string;
//     return acc;
//   }, {});
// };

export const responsiveResolver =
  <C extends ResponsiveConfig>(config: C) =>
  (rs: ResponsiveProp<C>) => {
    return Object.keys(rs)
      .map((k) => {
        const bp = k as BreakpointKey;
        const key = rs[bp] as string;

        return config[bp][key];
      })
      .join(' ');
  };

export const responsiveStyleResolution =
  <S extends Record<string, string>>(baseConfig: S) =>
  <C extends ResponsiveConfig<S>>(responsiveConfig: C) => {
    const base = (v: keyof S) => baseConfig[v];
    const responsive = responsiveResolver(responsiveConfig);
    const combined = (
      value: StyleProp<typeof base> | StyleProp<typeof responsive>
    ) => {
      if (typeof value === 'string') {
        return base(value);
      }

      return responsive(value as StyleProp<typeof responsive>);
    };

    return [combined, base, responsive] as const;
  };
