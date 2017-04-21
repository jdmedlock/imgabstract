require('babel-register')({
  presets: ['react', ['env']],
  plugins: ['react-hot-loader/babel', 'babel-plugin-transform-object-rest-spread'],
});

require('./helpers');
