export { full, responsiveFull } from './full';
export { size, baseSize, responsiveSize } from './size';

export const variant = (() => {
  const VARIANT = {
    primary:
      'border border-transparent text-white shadow-sm bg-indigo-600 hover:bg-indigo-700',
    secondary:
      'border border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200',
    white:
      'border border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-50',
  };

  return (value: keyof typeof VARIANT) => VARIANT[value];
})();

export const focus = () => 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';

export const disabled = () => 'disabled:opacity-80 disabled:pointer-events-none';
