import {
  Injectable,
  Injector,
  PartialConfig,
  StaticProps,
  StyleResolver,
  StyleResolvers,
} from './types';
import React from 'react';
import { NonEmpty } from '@uie-sessions/shared/types';

export const injectable =
  <P>() =>
  <S extends StyleResolvers>(resolvers: S) =>
  <C extends PartialConfig<S, P>>(config: NonEmpty<C>): Injectable<S, P, C> =>
  (staticProps) => {
    type PKey = keyof typeof staticProps;
    const style: S = { ...resolvers };

    const createResolver = <T extends StyleResolver>(
      resolver: T,
      propKeys: (keyof PKey)[]
    ): T => {
      const staticValues: Record<number, unknown> = {};

      propKeys.forEach((key, index) => {
        const value = staticProps[key];

        if (value) {
          staticValues[index] = value;
        }
      });

      return ((...args: Parameters<T>) => {
        return resolver(...args.map((a, i) => staticValues[i] ?? a));
      }) as T;
    };

    Object.keys(config).forEach((k) => {
      const key = k as keyof S;
      const propKeys = config[k as keyof C];

      if (propKeys) {
        style[key] = createResolver(style[key], propKeys);
      }
    });

    return style;
  };

export const componentOf = <S extends StyleResolvers, P>(
  style: S,
  injector: Injector<S, P>,
  displayName?: string
) => {
  const Component: React.FC<P> = (props) => injector(style, props);
  Component.displayName = displayName;

  return Component;
};

export const factoryOf =
  <
    S extends StyleResolvers,
    P,
    C extends PartialConfig<S, P>,
    I extends Injector<S, P>
  >(
    injectable: Injectable<S, P, C>,
    injector: I
  ) =>
  <Q extends Partial<StaticProps<S, P, C>>>(
    factoryProps: Q,
    displayName?: string
  ) => {
    const Component = componentOf<S, P>(
      injectable(factoryProps),
      injector
    ) as React.FC<{ [K in keyof P as K extends keyof Q ? never : K]: P[K] }>;
    Component.displayName = displayName;

    return Component;
  };
