import { Meta } from '@storybook/react';
import { Children } from 'react';
import { CircularButton, createCircularButton } from './circular-button';
import { PlusIcon as PlusOutlineIcon } from '@uie-sessions/shared/ui/icons/outline';
import { PlusIcon as PlusSolidIcon } from '@uie-sessions/shared/ui/icons/solid';

export default {
  title: 'buttons/circular-button',
} as Meta;

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex items-center">
      {Children.map(children, (child) => (
        <div className="m-4">{child}</div>
      ))}
    </div>
  );
};

const PrimaryCircularButton = createCircularButton({ variant: 'primary', size: 'm' });
const SecondaryCircularButton = createCircularButton({ variant: 'secondary', size: 'l' });
const WhiteCircularButton = createCircularButton({ variant: 'white', size: 'xl' });

export const CircularButtons = () => (
  <Layout>
    <CircularButton size="xs" icon={PlusSolidIcon} />
    <CircularButton size="s"  icon={PlusSolidIcon} />
    <CircularButton size="m" icon={PlusSolidIcon} />
    <CircularButton size="l" icon={PlusSolidIcon} />
    <CircularButton size="xl" icon={PlusSolidIcon} />
  </Layout>
);

export const CustomCircularButtons = () => (
  <Layout>
    <PrimaryCircularButton icon={PlusOutlineIcon} />
    <SecondaryCircularButton icon={PlusOutlineIcon} />
    <WhiteCircularButton icon={PlusOutlineIcon} />
  </Layout>
);
