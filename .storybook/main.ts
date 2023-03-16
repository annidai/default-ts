const webpack = require('webpack');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  staticDirs: ['./static'],
  core: {
    // Enable Webpack 5, as v4 is still the default for Storybook
    builder: 'webpack5',
  },
};
