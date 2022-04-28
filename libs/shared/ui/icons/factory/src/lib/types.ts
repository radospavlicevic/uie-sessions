import {SVGProps} from 'react';
import {AnyProps, EmptyObject} from '@uie-sessions/shared/types';

export type SVGIconProps<P extends AnyProps = EmptyObject> = SVGProps<SVGSVGElement> & P;
export type SVGRenderFunction<P extends AnyProps = EmptyObject> = (props: SVGIconProps<P>) => JSX.Element;
export type SVGComponent<P extends AnyProps = EmptyObject> = React.FC<SVGIconProps<P>>;
