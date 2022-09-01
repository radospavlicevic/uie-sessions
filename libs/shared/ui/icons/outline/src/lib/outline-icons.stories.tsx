import { Meta } from '@storybook/react';
import { XIcon, MenuIcon, MailIcon, PlusIcon } from './outline-icons';

export default {
  title: 'icons/outline',
} as Meta;

export const X = () => <XIcon />;
export const Menu = () => <MenuIcon />;
export const Mail = () => <MailIcon />
export const Plus = () => <PlusIcon />;
