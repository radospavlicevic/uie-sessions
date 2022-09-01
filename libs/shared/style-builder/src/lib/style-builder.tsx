import clsx from 'clsx';
import { StyleBuilderAPI, TApply, TStyleResolvers } from './types';

export const createStyleBuilder = <
  B extends React.FC,
  R extends TStyleResolvers,
  >(
  resolvers: R,
  builder: (apply: TApply) => B
) => () => {
  type TBuilderKey = keyof R;
  type StyleProps<K extends TBuilderKey = TBuilderKey> = Record<K, Parameters<R[K]>[0]>;

  const style: Partial<Record<TBuilderKey, string>> = {};
  let stylePropKeys: (TBuilderKey)[] = Object.keys(resolvers);

  // resolving style from style props
  const resolveStyle = <P extends StyleProps>(props: P) => {
    return clsx(...stylePropKeys.map((key) => resolvers[key](props[key])));
  };

  const build = () => {
    const apply = (props: StyleProps) => {
      const propStyle = resolveStyle(props);

      return clsx(Object.values(style), propStyle);
    };

    return builder(apply as TApply);
  };

  return Object.keys(resolvers).reduce<StyleBuilderAPI<B, R>>(
    (api, key) => {
      type TValue = StyleProps[TBuilderKey]

      (api as Record<string, unknown>)[key] = (v: TValue) => {
        style[key as TBuilderKey] = resolvers[key](v);
        stylePropKeys = stylePropKeys.filter((k) => k !== key);

        return api as StyleBuilderAPI<B, R>;
      };

      return api;
    },
    { build } as unknown as StyleBuilderAPI<B, R>,
  );
};
