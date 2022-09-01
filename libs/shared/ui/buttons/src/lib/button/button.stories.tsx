import { Button } from './button';
import { Meta, Story } from '@storybook/react';
import { ExtractFCProps, StyleProp } from '@uie-sessions/shared/types';
import { ButtonBuilder, size as sizeProp } from '@uie-sessions/shared/ui/button-builders';
import { Children } from 'react';

export default {
  title: 'buttons/button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'white'],
      control: { type: 'select' },
    },
    size: { control: 'object' },
    full: { control: 'object' },
  },
} as Meta;

type ButtonProps = ExtractFCProps<typeof Button>;

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex items-center">
      {Children.map(children, (child) => (
        <div className="m-2">{child}</div>
      ))}
    </div>
  );
};

const Template: Story<ButtonProps> = ({ full, size, ...rest }) => {
  const props = {
    size:
      typeof size === 'object' ? size : ('xl' as StyleProp<typeof sizeProp>),
    full: typeof full === 'object' ? full : false,
  };

  return (
    <Button {...rest} {...props}>
      Button Builder
    </Button>
  );
};

export const Builder = Template.bind({});

const Btn = ButtonBuilder().full(false).build();

export const Primary = () => {
  return (
    <Layout>
      <Btn variant="primary" size="xs">
        Primary S
      </Btn>
      <Btn variant="primary" size="s">
        Primary M
      </Btn>
      <Btn variant="primary" size="m">
        Primary L
      </Btn>
      <Btn variant="primary" size="l">
        Primary XL
      </Btn>
      <Btn variant="primary" size="xl">
        Primary XXL
      </Btn>
    </Layout>
  );
};

export const Secondary = () => {
  return (
    <Layout>
      <Btn variant="secondary" size="xs">
        Secondary S
      </Btn>
      <Btn variant="secondary" size="s">
        Secondary M
      </Btn>
      <Btn variant="secondary" size="m">
        Secondary L
      </Btn>
      <Btn variant="secondary" size="l">
        Secondary XL
      </Btn>
      <Btn variant="secondary" size="xl">
        Secondary XXL
      </Btn>
    </Layout>
  );
};

export const White = () => {
  return (
    <Layout>
      <Btn variant="white" size="xs">
        White S
      </Btn>
      <Btn variant="white" size="s">
        White M
      </Btn>
      <Btn variant="white" size="m">
        White L
      </Btn>
      <Btn variant="white" size="l">
        White XL
      </Btn>
      <Btn variant="white" size="xl">
        White XXL
      </Btn>
    </Layout>
  );
};

Builder.args = {
  variant: 'primary',
  size: {
    sm: 'xs',
    md: 's',
    lg: 'm',
    xl: 'l',
    '2xl': 'xl',
  },
  full: { sm: true, md: false },
};
