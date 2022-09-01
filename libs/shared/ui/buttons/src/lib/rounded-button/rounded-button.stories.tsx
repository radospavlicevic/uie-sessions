import { Meta } from '@storybook/react';
import { Children } from 'react';
import { RoundedButtonBuilder } from '@uie-sessions/shared/ui/button-builders';

export default {
  title: 'buttons/rounded-button',
} as Meta;

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex items-center">
      {Children.map(children, (child) => (
        <div className="m-2">{child}</div>
      ))}
    </div>
  );
};

const RoundedBtn = RoundedButtonBuilder()
  .variant('primary')
  .full(false)
  .build();

export const RoundedButton = () => (
  <Layout>
    <RoundedBtn size="xs">Rounded XS</RoundedBtn>
    <RoundedBtn size="s">Rounded S</RoundedBtn>
    <RoundedBtn size="m">Rounded M</RoundedBtn>
    <RoundedBtn size="l">Rounded L</RoundedBtn>
    <RoundedBtn size="xl">Rounded XL</RoundedBtn>
  </Layout>
);
