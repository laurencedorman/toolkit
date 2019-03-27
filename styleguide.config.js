/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const config = require('@manomano/webpack/config.js');
const path = require('path');


module.exports = {
  webpackConfig: config('en'),
  title: ' ',
  styleguideComponents: {
    Wrapper: path.join(__dirname, './src/styleguidist/Wrapper'),
  },
  components: 'src/components/**/*.jsx',
  styleguideDir: 'dist',
  template: {
    favicon: './src/assets/favicons.png',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans',
        },
        {
          rel: 'stylesheet',
          href: './src/index.scss',
        },
      ],
    },
    body: {
      raw: '<div id="root"></div>',
    },
  },
  pagePerSection: true,
  theme: {
    fontFamily: {
      base: '"Open Sans", sans-serif',
    },
    baseBackground: '#E8E8E8',
    link: '#274e75',
    linkHover: '#90a7bf',
    border: '#e0d2de',
    color: {
      base: '#0c193A',
      light: '#1e3c87',
      lightest: '#29b9ad',
      link: '#fff',
      linkHover: '#00eccd',
      border: '#e8e8e8',
      name: '#7f9a44',
      type: '#b77daa',
      error: '#c00',
      baseBackground: '#fff',
      codeBackground: '#f5f5f5',
      sidebarBackground: '#0c193A',
      ribbonBackground: '#f9970d',
      ribbonText: '#fff',
    },
  },
  styles: {
    Logo: {
      logo: {
        background: 'url("../src/assets/manomano_blanc.png") no-repeat',
        height: '100px',
        backgroundSize: 'contain',
      },
    },
    StyleGuide: {
      '@global body': {
        fontFamily: 'Open Sans',
      },
    },
  },
  sections: [
    {
      name: 'Start',
      content: 'src/styleguidist/Start.md',
    },
    {
      name: 'Introduction',
      content: 'src/styleguidist/Introduction.md',
    },
    {
      name: 'Manoolkit Colors',
      content: 'src/styleguidist/Colors.md',
    },
    {
      name: 'Manoolkit Utilities',
      description: 'Some components to help',
      components: [
        'src/components/GetMeasure/*.jsx',
        'src/components/HeightTransition/*.jsx',
        'src/components/Portal/*.jsx',
        'src/components/StepControler/*.jsx',
        'src/components/Toggle/*.jsx',
        'src/components/ToggleDown/*.jsx',
      ],
      sectionDepth: 1,
    },
    {
      name: 'Manoolkit Components',
      description: 'Toolkit Library with new graphic chart',
      components: 'src/components/*/*.jsx',
      sectionDepth: 1,
      ignore: [
        'src/components/DropDown/OptionContainer.jsx',
        'src/components/GetMeasure/*.jsx',
        'src/components/HeightTransition/*.jsx',
        'src/components/InputAutoComplete/!(InputAutoComplete.jsx)',
        'src/components/Input/InputLight.jsx',
        'src/components/Portal/*.jsx',
        'src/components/StepControler/*.jsx',
        'src/components/Tabs/TabBody.jsx',
        'src/components/Tabs/TabLabel.jsx',
        'src/components/Toggle/*.jsx',
        'src/components/ToggleDown/*.jsx',
        'src/components/Icon/Icons/*.jsx',
      ],
    },
  ],
};
