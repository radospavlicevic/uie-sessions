import { Meta } from '@storybook/react';
import { StatsControlGroup } from './stats';

export default {
  title: 'control-groups/stats',
} as Meta;

export const StatsControls = () => (
  <StatsControlGroup
    buttonLabel="Bookmark"
    statsLabel="12k"
    onClick={() => console.log('stats')}
  />
);
