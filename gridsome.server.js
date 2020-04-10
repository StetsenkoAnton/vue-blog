// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const unsplashKey = '45bc854368247bdd469bef2128de9457d67d8501e5f1923667efbd308edb88bd';
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    let options = {
      params: {
        client_id: unsplashKey,
        page: 1,
        per_page: 15
      }
    };
    const { data } = await axios.get('https://api.unsplash.com/photos', options)

    const contentType = store.addCollection({
      typeName: 'RedditPost',
    })
    for (const post of data) {
      contentType.addNode({
        id: post.id,
        title: post.alt_description,
        type: 'reddit',
        thumbnail: post.urls.regular,
      })
    }

    store.addSchemaTypes(`
      type Media implements Node {
        title: String
        type: String
        date: String
        body: String
        thumbnail: String
        leadPar: String
        path: String
      }
      type Blog implements Node {
        title: String
        type: String
        date: String
        body: String
        thumbnail: String
      }`)
  });
  api.chainWebpack(config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
  })
};
