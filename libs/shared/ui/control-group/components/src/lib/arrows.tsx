import {
  ControlGroup,
  IconControl,
} from '@uie-sessions/shared/ui/control-group/factory';
import {
  PreviousArrowIcon,
  NextArrowIcon,
} from '@uie-sessions/shared/ui/icons/outline';
import React from 'react';

type ArrowControlGroupProps = {
  onClickPrevious: (e?: React.MouseEvent<HTMLElement>) => void;
  onClickNext: (e?: React.MouseEvent<HTMLElement>) => void;
};

export const ArrowControlGroup: React.FC<ArrowControlGroupProps> = ({
  onClickPrevious,
  onClickNext,
}) => {
  return (
    <ControlGroup>
      <IconControl icon={PreviousArrowIcon} onClick={onClickPrevious} />
      <IconControl icon={NextArrowIcon} onClick={onClickNext} />
    </ControlGroup>
  );
};
