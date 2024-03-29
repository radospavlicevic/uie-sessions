import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from './text';

export default {
  component: Text,
  title: 'Text',
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Typography = Template.bind({});

Typography.args = {
  text: 'Test text',
};
