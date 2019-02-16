import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import license from 'rollup-plugin-license';
import pkg from './package.json';

const extensions = [
  '.ts', '.tsx',
];

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  plugins: [
    resolve({
      extensions
    }),
    babel({
      extensions
    }),
    license({
      banner:
`Bundle of <%= pkg.name %>
Generated: <%= moment().format('YYYY-MM-DD') %>
Version: <%= pkg.version %>
License: MIT
Dependencies:
<% _.forEach(dependencies, function (dependency) { %>
  <%= dependency.name %> -- <%= dependency.version %>
<% }) %>`,
    }),
  ],
};
