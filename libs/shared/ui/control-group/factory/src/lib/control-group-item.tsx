import React from 'react';
import { paddingProp, positionProp, StyleProps } from './types';
import { SVGComponent } from '@uie-sessions/shared/ui/icons/factory';
import clsx from 'clsx';
import { IControl } from './control-group';

type TextControlProps = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
};

type IconControlProps = {
  onClick: (e?: React.MouseEvent<HTMLElement>) => void;
  icon: SVGComponent;
};

type TextIconControlProps = {
  onClick: (e?: React.MouseEvent<HTMLElement>) => void;
  icon: SVGComponent;
  text: string;
};

export const TextControl: React.FC<TextControlProps & IControl> = ({
  children,
  onClick,
  control,
}) => {
  return (
    <button
      className={paddingProp('text')}
      onClick={onClick}
      {...control}
    >
      {children}
    </button>
  );
};

export const IconControl: React.FC<IconControlProps & IControl> = ({
  icon: Icon,
  onClick,
  control,
}) => {
  return (
    <button className={paddingProp('icon')} onClick={onClick} {...control}>
      <Icon className="h5 w5" />
    </button>
  );
};

export const StatsControl: React.FC = ({ children }) => {
  return <div className={paddingProp('stats')}>{children}</div>;
};

export const TextIconControl: React.FC<TextIconControlProps & IControl> = ({
  onClick,
  icon: Icon,
  text,
  control,
}) => {
  const classes = clsx('inline-flex items-center', paddingProp('text'));
  return (
    <button className={classes} onClick={onClick} {...control}>
      <Icon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
      {text}
    </button>
  );
};

export const ListControl: React.FC = ({children}) => {


  return (
    <div>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  )

}
