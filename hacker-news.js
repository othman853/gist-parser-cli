const got = require('got');
const cheerio = require('cheerio');
const chalk = require('chalk');
const entities = require('entities');

got('https://news.ycombinator.com').then(response => {

  const $ = cheerio.load(response.body);

  $('.itemlist > .athing')
    .map( (_, a) => $(a) )
    .map( (_, a) => ({ rank: a.find('.rank').first().html(), txt: entities.decodeHTML(a.find('.storylink').first().html()) }) )
    .map( (_, a) => `${a.rank}${a.txt}` )
    .map( (_, a) => chalk.green(a) )
    .each( (_, a) => console.log(a));

});
