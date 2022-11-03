export const positionProp = (() => {
  const POSITION = {
    start:
      'relative inline-flex items-center rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50',
    middle:
      '-ml-px relative inline-flex items-center border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50',
    end: '-ml-px relative inline-flex items-center rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50',
  };

  return (key: keyof typeof POSITION) => POSITION[key];
})();

export const IN_FOCUS = 'z-10 outline-none ring-1 ring-indigo-500 border-indigo-500'

export const paddingProp = (() => {
  const PADDING = {
    text: "px-4 py-2 text-gray-700 outline-none",
    icon: "px-3 py-2 text-gray 500 outline-none",
    stats: "px-3 py2 text-gray-700 outline-none",
  }

  return (key: keyof typeof PADDING) => PADDING[key]
})()

export type StyleProps<P extends (prop: never) => string> = P extends (
  prop: infer R
) => string
  ? R
  : never;
