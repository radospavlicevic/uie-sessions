const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const base = require('../../twconfig.base');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  ...base,
}
