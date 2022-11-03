import React from 'react';
import {
  ControlGroup,
  TextIconControl,
  StatsControl,
} from '@uie-sessions/shared/ui/control-group/factory';
import { XIcon } from '@uie-sessions/shared/ui/icons/outline';

type StatsControlGroupProps = {
  onClick: (e?: React.MouseEvent<HTMLElement>) => void;
  statsLabel: string;
  buttonLabel: string;
};

export const StatsControlGroup: React.FC<StatsControlGroupProps> = ({
  onClick,
  statsLabel,
  buttonLabel,
}) => {
  return (
    <ControlGroup>
      <TextIconControl icon={XIcon} text={buttonLabel} onClick={onClick} />
      <StatsControl>{statsLabel}</StatsControl>
    </ControlGroup>
  );
};
