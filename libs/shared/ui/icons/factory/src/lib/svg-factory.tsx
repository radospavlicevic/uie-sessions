import { forwardRef, ForwardRefRenderFunction } from 'react';
import { EmptyObject, AnyProps } from '@uie-sessions/shared/types';
import { SVGComponent, SVGIconProps, SVGRenderFunction } from './types';

export { SVGComponent } from './types';

export const createSVGIcon = <
  P extends AnyProps = EmptyObject,
  D = Partial<SVGIconProps<P>>
>(
  Svg: SVGRenderFunction<P>,
  displayName: string,
  defaultProps?: D
) => {
  const SVG: SVGComponent<P> = (props) => {
    return <Svg {...props} />;
  };
  SVG.displayName = displayName;
  SVG.defaultProps = defaultProps;

  return SVG;
};

export const forwardSVGIconRef = <
  P extends AnyProps = EmptyObject,
  D = Partial<SVGIconProps<P>>
>(
  renderSVG: ForwardRefRenderFunction<SVGSVGElement, SVGIconProps<P>>,
  displayName: string,
  defaultProps?: D
) => {
  const SVG = forwardRef<SVGSVGElement, SVGIconProps<P>>((props, ref) => {
    return renderSVG(props, ref);
  });
  SVG.displayName = displayName;
  SVG.defaultProps = defaultProps;

  return SVG;
};
