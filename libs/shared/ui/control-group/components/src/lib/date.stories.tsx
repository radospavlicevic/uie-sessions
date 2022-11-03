import { Meta } from '@storybook/react';
import { TextControlGroup } from './date';

export default {
  title: 'control-groups/date',
} as Meta;

const ITEMS: {label: string,  value: string}[] = [{label: "Year", value: "0"}, {label: "Month", value: "0"}, {label: "Day", value: "0"},]

function handleClick<T>(item: T) {
  console.log("Clicked", item)
}


export const DateControlGroup = () => <TextControlGroup items={ITEMS} onClick={handleClick}/>;


