import clsx from 'clsx';
import React, {
  FocusEventHandler,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { IN_FOCUS, positionProp, StyleProps } from './types';

export interface IControl<T = Element> {
  control?: {
    onFocus: FocusEventHandler<T>;
  };
}

export const ControlGroup: React.FC = ({ children }) => {
  const [currentFocus, setCurrentFocus] = useState(-1);
  const numberOfItems = React.Children.count(children);

  return (
    <div className="relative z-0 inline-flex shadow-sm rounded-md">
      {React.Children.map(children, (item, index) => {
        const element = item as ReactElement;
        let position: StyleProps<typeof positionProp> = 'middle';
        if (index === 0) position = 'start';
        if (index === numberOfItems - 1) position = 'end';

        const onFocus = (event: React.FocusEvent) => {
          element.props?.onFocus?.(event);
          setCurrentFocus(index);
        };

        const classes = clsx(positionProp(position), {
          [IN_FOCUS]: currentFocus === index,
        });

        return (
          <div className={classes} onBlur={() => setCurrentFocus(-1)}>
            {React.cloneElement(item as ReactElement, {
              control: { onFocus },
            })}
          </div>
        );
      })}
    </div>
  );
};
