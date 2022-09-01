import { Meta } from '@storybook/react';
import { Children } from 'react';
import { createIconButton, IconButton as IconBtn } from './icon-button';
import { createIconAnchorButton } from './icon-anchor-button';
import { MailIcon } from '@uie-sessions/shared/ui/icons/solid';

export default {
  title: 'buttons/icon-button',
} as Meta;

const CustomIconButton = createIconButton(
  {
    size: 'l',
    variant: 'secondary',
  },
  'CustomIconBtn'
);

const CustomIconAnchorButton = createIconAnchorButton(
  {
    size: 'xl',
    variant: 'white',
  },
  'CustomIconAnchorBtn'
);

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex items-center">
      {Children.map(children, (child) => (
        <div className="m-2">{child}</div>
      ))}
    </div>
  );
};

export const IconButton = () => (
  <Layout>
    <IconBtn size='s' icon={MailIcon}>Icon S</IconBtn>
    <IconBtn size='m' icon={MailIcon}>Icon M</IconBtn>
    <IconBtn size='l' icon={MailIcon}>Icon L</IconBtn>
    <IconBtn size='xl' icon={MailIcon}>Icon XL</IconBtn>
  </Layout>
);

export const TrailingIconButton = () => (
  <Layout>
    <IconBtn size='s' position='trailing' icon={MailIcon}>Icon S</IconBtn>
    <IconBtn size='m' position='trailing' icon={MailIcon}>Icon M</IconBtn>
    <IconBtn size='l' position='trailing' icon={MailIcon}>Icon L</IconBtn>
    <IconBtn size='xl' position='trailing' icon={MailIcon}>Icon XL</IconBtn>
  </Layout>
);

export const CustomIconButtons = () => {
  return (
    <Layout>
      <CustomIconButton icon={MailIcon} position='trailing'>Custom Button</CustomIconButton>
      <CustomIconAnchorButton icon={MailIcon}>Custom Anchor</CustomIconAnchorButton>
    </Layout>
  );
};
