import { Story, Meta } from '@storybook/react';
import { SharedStorybook, SharedStorybookProps } from './shared-storybook';

export default {
  component: SharedStorybook,
  title: 'SharedStorybook',
} as Meta;

const Template: Story<SharedStorybookProps> = (args) => (
  <SharedStorybook {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
