
'use strict';


// Export

module.exports = {
  app: {
    lang: 'ru',
    name: 'Site',
    description: 'Description',
    domain: 'google.com',
    preloader: false,
    responsive: true,
    microdata: false,
    jquery: false
  },

  levels: {
    common: 1,
    develop: 2,
    plugins: 3
  },

  mainLevel: 'develop',

  extnames: {
    templates: '.pug',
    scripts: '.js',
    styles: '.scss'
  },

  dist: {
    styles: 'styles',
    fonts: 'styles/fonts',
    img: 'styles/img',
    scripts: 'scripts',
    static: 'static',
    favicons: 'favicons'
  },

  add: {
    style: '.[name] {\n\t//\n}\n',
    template: `mixin [name]( bem )\n\t+b( '[name]', bem )&attributes(attributes)\n\t\tblock\n`,
    block: ''
  },

  autoCreate: true,
  autoCreateAdd: ['style'],
  autoCreateIgnore: ['html']
};
