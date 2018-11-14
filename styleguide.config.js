module.exports = {
  webpackConfig: require('./config/webpack.config.dev.js'),
  title: 'Mano-Toolkit',
  components: 'src/components/**/*.jsx',
  template: {
    head: {
      links: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans',
      }],
    },
    body: {
      raw: '<div id="root"></div><div id="portalRoot"></div>',
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
};
