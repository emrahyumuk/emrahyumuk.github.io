var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    title: "Emrah Yumuk | Kişisel Blog | Gezi - Müzik - Yazılım",
    description: "Emrah Yumuk'un kişisel websitesi ve blogu. Gezi, müzik, yazılım ve teknoloji üzerine yazılar.",
    generator: "Metalsmith",
    url: "http://www.emrahyumuk.com/"
  })
  .source('./src')
  .destination('./')
  .clean(false)
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars',
    partials: "partials"
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
