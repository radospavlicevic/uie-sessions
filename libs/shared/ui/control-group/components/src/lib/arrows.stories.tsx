import { Meta } from '@storybook/react';
import { ArrowControlGroup } from './arrows';

export default {
  title: 'control-groups/arrows',
} as Meta;

export const ArrowControls = () => (
  <ArrowControlGroup
    onClickNext={() => console.log('Next')}
    onClickPrevious={() => console.log('Previous')}
  />
);
