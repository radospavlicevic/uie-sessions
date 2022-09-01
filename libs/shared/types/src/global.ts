import React from 'react';
import { ClassValue } from 'clsx';

// eslint-disable-next-line @typescript-eslint/ban-types
export type EmptyObject = {};
export type AnyProps = Partial<Record<string, unknown>>;
export type StyleProp<T extends (v: never) => ClassValue> = T extends (
    v: infer V
  ) => ClassValue
  ? V
  : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExtractFCProps<T extends React.FC<any>> = T extends React.FC<
    infer P
    >
  ? P
  : Record<string, never>;

export type NonEmpty<T> = T extends Record<string, never> ? never : T;

export type Cast<X, Y> = X extends Y ? X : Y;
