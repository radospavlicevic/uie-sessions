import { Cast } from './global';

export type UnionToTuple<U extends string, R extends unknown[] = []> = {
  [S in U]: Exclude<U, S> extends never
    ? [...R, S]
    : UnionToTuple<Exclude<U, S>, [...R, S]>;
}[U];

export type TupleToUnion<T extends readonly unknown[]> = T[number];

export type Length<T extends unknown[]> = T['length'];

export type Prepend<N, T extends unknown[]> = T extends [...infer I]
  ? [N, ...I]
  : T;
export type Append<N, T extends unknown[]> = T extends [...infer I]
  ? [...I, N]
  : T;

export type Reverse<T extends unknown[], R extends unknown[] = []> = T extends [
  infer H,
  ...infer Q
]
  ? Reverse<Q, [H, ...R]>
  : R;

export type Split<
  T extends string,
  S extends string = ' ',
  R extends string[] = []
> = T extends `${infer H}${S}${infer Q}`
  ? Split<Q, S, [...R, H]>
  : T extends string
  ? [...R, T]
  : R;

export type Join<
  T extends string[],
  S extends string = ' ',
  R extends string = ''
> = T extends [infer H, ...infer Q]
  ? Join<Cast<Q, string[]>, S, `${R}${R extends '' ? R : S}${Cast<H, string>}`>
  : R;

export type Prefix<
  T extends string[],
  P extends string,
  R extends unknown[] = []
> = T extends [infer H, ...infer Q]
  ? Prefix<Cast<Q, string[]>, P, [...R, `${P}${Cast<H, string>}`]>
  : R;
