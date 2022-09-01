import React from 'react';
import {
  EmptyObject,
  ExtractFCProps,
  StyleProp,
} from '@uie-sessions/shared/types';

export type TStyleResolvers<V = never> = Record<string, (v: V) => string>;
export type TStyleProps<
  R extends TStyleResolvers,
  K extends keyof R = keyof R
> = Record<keyof R, StyleProp<R[K]>>;
export type TApply = (p: unknown) => string;

type TBuild<
  B extends React.FC,
  R extends Record<string, (v: never) => string>,
  S,
  P
> = React.FC<
  ExtractFCProps<B> & {
    [K in keyof R as K extends keyof S ? never : K]: K extends keyof P
      ? P[K]
      : StyleProp<R[K]>;
  }
>;

interface IBuild<
  B extends React.FC,
  R extends TStyleResolvers,
  S,
  C = Omit<TStyleProps<R>, keyof S>
> {
  build: <
    P extends {
      [K in keyof P]?: K extends keyof C ? C[K] : never;
    } = EmptyObject
  >() => TBuild<B, R, S, P>;
}

export type StyleBuilderAPI<
  B extends React.FC,
  R extends TStyleResolvers,
  S = EmptyObject
> = keyof Omit<R, keyof S> extends never
  ? IBuild<B, R, S>
  : {
      [Q in keyof Omit<R, keyof S>]: (
        v: StyleProp<R[Q]>
      ) => StyleBuilderAPI<B, R, S & Record<Q, string>>;
    } & IBuild<B, R, S>;
