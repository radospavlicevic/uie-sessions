import {
  ControlGroup,
  TextControl,
} from '/Users/saponja/Documents/Projects/uie-sessions/libs/shared/ui/control-group/factory/src/index';

type TextControlGroupProps<T> = {
  items: T[];
  onClick: (item: T) => void;
};

export const TextControlGroup: React.FC<
  TextControlGroupProps<{ label: string; value: string }>
> = ({items, onClick}) => {
  return (
    <ControlGroup>
      {items.map((item, index) => {
        return (
          <TextControl
            key={index}
            onClick={() => onClick(item)}
            onFocus={() => console.log('focus')}
          >
            {item.label}
          </TextControl>
        );
      })}
    </ControlGroup>
  );
};
