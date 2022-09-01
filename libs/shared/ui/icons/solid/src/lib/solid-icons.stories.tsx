import { Meta } from '@storybook/react';
import { XIcon, MenuIcon, MailIcon, PlusIcon } from './solid-icons';

export default {
  title: 'icons/solid',
} as Meta;

export const X = () => <XIcon />;
export const Menu = () => <MenuIcon />;
export const Mail = () => <MailIcon />;
export const Plus = () => <PlusIcon />;
