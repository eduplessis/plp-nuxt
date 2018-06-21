var glob = require('glob');
var path = require('path');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  '/projets': 'projets/*.json'
});

module.exports = {
  modules: ["nuxt-netlify-cms","bootstrap-vue/nuxt"],
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
      { hid: 'description', name: 'description', content: 'Plp Constructions inc.' },
      { name:"msapplication-TileColor", content:"#ffffff"},
      { name:"msapplication-TileImage", content:"/ms-icon-144x144.png"},
      { name:"theme-color", content:"#ffffff"}
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/lightense-images@1/lightense.min.js"
      },
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js"
      }
    ],
    link:[
      {rel:"apple-touch-icon", sizes:"57x57", href:"/apple-icon-57x57.png"},
      {rel:"apple-touch-icon", sizes:"60x60", href:"/apple-icon-60x60.png"},
      {rel:"apple-touch-icon", sizes:"72x72", href:"/apple-icon-72x72.png"},
      {rel:"apple-touch-icon", sizes:"76x76", href:"/apple-icon-76x76.png"},
      {rel:"apple-touch-icon", sizes:"114x114", href:"/apple-icon-114x114.png"},
      {rel:"apple-touch-icon", sizes:"120x120", href:"/apple-icon-120x120.png"},
      {rel:"apple-touch-icon", sizes:"144x144", href:"/apple-icon-144x144.png"},
      {rel:"apple-touch-icon", sizes:"152x152", href:"/apple-icon-152x152.png"},
      {rel:"apple-touch-icon", sizes:"180x180", href:"/apple-icon-180x180.png"},
      {rel:"icon", type:"image/png", sizes:"192x192",  href:"/android-icon-192x192.png"},
      {rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
      {rel:"icon", type:"image/png", sizes:"96x96", href:"/favicon-96x96.png"},
      {rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
      {rel:"manifest", href:"/manifest.json"}
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