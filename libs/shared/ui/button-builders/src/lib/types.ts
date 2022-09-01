import { Join, Prefix, Split } from '@uie-sessions/shared/types';

export type ButtonHTMLProps = Pick<React.HTMLProps<HTMLButtonElement>, 'onClick' | 'disabled'>
export type AnchorHTMLProps = Pick<React.HTMLProps<HTMLAnchorElement>, 'href' | 'target'>

export type BreakpointKey = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type ResponsiveConfig<C extends Record<string, string> = Record<string, string>> = {
  [B in BreakpointKey]: {
    [S in keyof C]?: Join<Prefix<Split<C[S]>, `${B}:`>>;
  }
} & { '': C };

export type ResponsiveProp<C extends ResponsiveConfig> = {
  [K in keyof C]?: keyof C[K];
};
