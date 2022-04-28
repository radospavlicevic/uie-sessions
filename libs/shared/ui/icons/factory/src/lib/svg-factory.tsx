import { forwardRef, ForwardRefRenderFunction } from 'react';
import clsx from 'clsx';
import { EmptyObject, AnyProps } from '@uie-sessions/shared/types';
import { SVGComponent, SVGIconProps, SVGRenderFunction } from './types';

const getProps = <P extends SVGIconProps>(
  defaultProps: Partial<P>,
  props: P
): P => {
  const className = clsx(defaultProps.className, props.className);

  return {
    ...defaultProps,
    ...props,
    className,
  };
};

export const createSVGIcon = <
  P extends AnyProps = EmptyObject,
  D = Partial<SVGIconProps<P>>
>(
  Svg: SVGRenderFunction<P>,
  displayName: string,
  defaultProps: D | EmptyObject = {}
) => {
  const SVG: SVGComponent<P> = (props) => (
    <Svg {...getProps(defaultProps, props)} />
  );
  SVG.displayName = displayName;

  return SVG;
};

export const forwardSVGIconRef = <
  P extends AnyProps = EmptyObject,
  D = Partial<SVGIconProps<P>>
>(
  renderSVG: ForwardRefRenderFunction<SVGSVGElement, SVGIconProps<P>>,
  displayName: string,
  defaultProps: D | EmptyObject = {}
) => {
  const SVG = forwardRef<SVGSVGElement, SVGIconProps<P>>((props, ref) => {
    return renderSVG(getProps(defaultProps, props), ref);
  });
  SVG.displayName = displayName;

  return SVG;
};
