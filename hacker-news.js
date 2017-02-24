const got = require('got');
const cheerio = require('cheerio');
const chalk = require('chalk');


got('https://news.ycombinator.com').then(response => {

  const $ = cheerio.load(response.body);

  const news = $('.itemlist > .athing');

  news
    .map( (_, a) => $(a) )
    .map( (_, a) => ({ rank: a.find('.rank').first().html(), txt: a.find('.storylink').first().html() }) )
    .map( (_, a) => `${a.rank}${a.txt}` )
    .map( (_, a) => chalk.green(a) )
    .each( (_, a) => console.log(a));

});
