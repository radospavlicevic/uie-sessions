import { ClassValue } from 'clsx';
import { PropsWithChildren } from 'react';
import { TupleToUnion } from '@uie-sessions/shared/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StyleResolver = (...args: any[]) => ClassValue;

export type StyleResolvers = Record<string, StyleResolver>;

export type StaticProps<
  S extends StyleResolvers,
  P,
  C extends PartialConfig<S, P>
> = Pick<
  P,
  keyof P & { [K in keyof C]: TupleToUnion<Exclude<C[K], undefined>> }[keyof C]
>;

export type Injector<S extends StyleResolvers, P> = (
  style: S,
  props: PropsWithChildren<P>
) => JSX.Element;

export type Injectable<
  S extends StyleResolvers,
  P,
  C extends PartialConfig<S, P>
> = <T extends Partial<StaticProps<S, P, C>>>(props: T) => S;

// INJECTABLE CONFIG
export type PropsKeys<A, P> = {
  [K in keyof P]: Exclude<P[K], undefined> extends A ? K : never;
}[keyof P];

export type PropsTuple<
  F extends StyleResolver,
  P,
  A extends unknown[] = Parameters<F>,
  T extends unknown[] = []
> = A extends []
  ? T
  : A extends [infer H, ...infer R]
  ? PropsTuple<F, P, R, [...T, PropsKeys<H, P>]>
  : T;

export type Config<S extends StyleResolvers, P> = {
  [K in keyof S as Parameters<S[K]> extends [] ? never : K]: PropsTuple<
    S[K],
    P
  >;
};

export type PartialConfig<S extends StyleResolvers, P> = Partial<Config<S, P>>;
