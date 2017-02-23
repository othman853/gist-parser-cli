const got = require('got');
const cheerio = require('cheerio');


got('https://news.ycombinator.com').then(response => {

  const $ = cheerio.load(response.body);

  const news = $('.itemlist > .athing');

  console.log(news);
});
