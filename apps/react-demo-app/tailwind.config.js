const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  presets: [require('../../twconfig.base')],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}
