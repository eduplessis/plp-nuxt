var glob = require('glob');
var path = require('path');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  '/projets': 'projets/*.json'
});

module.exports = {
  modules: ["nuxt-netlify-cms"],
  css: [
    '@/assets/css/main.scss'
  ],
  generate: {
    routes: dynamicRoutes
  },
  head: {
    title: 'Plp Constructions inc.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Plp Constructions inc.' }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/lightense-images@1/lightense.min.js"
      },
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js"
      }
    ]
  }
};


/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}