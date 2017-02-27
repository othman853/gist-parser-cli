const got = require('got');
const cheerio = require('cheerio');
const chalk = require('chalk');
const entities = require('entities');
const read = require('read');
const exec = require('child_process').exec;

const findFirst =
  (query, athing) => athing.find(query).first();

const on = on => on;

const html =
  domPiece => entities.decodeHTML(domPiece.html());

const href =
  domPiece => domPiece.attr('href');

const getRank =
  athing => html(
    findFirst('.rank', on(athing))
  );

const getText =
  athing => html(
    findFirst('.storylink', on(athing))
  );

const getLink =
  athing => href(
    findFirst('.storylink', on(athing))
  );

const preparePrettyPrint =
  parsedThing => chalk.green(`${parsedThing.rank} ${parsedThing.text}`);


got('https://news.ycombinator.com').then(response => {

  const $ = cheerio.load(response.body);
  const news = $('.itemlist > .athing').map( (_, athing) => $(athing) );

  const options =
    news =>
      news
        .map( (_, athing) => ({ rank: getRank(athing), text: getText(athing), link: getLink(athing) }) )
        .map( (_, parsedThing) => Object.assign(parsedThing, { prettyPrint: preparePrettyPrint(parsedThing) }))
        .toArray()
        .reduce( (things, thing) => Object.assign(things, { [thing.rank.replace('.', '')]: { text: thing.text, link: thing.link, prettyPrint: thing.prettyPrint } }), {});

  const optionsString =
    options =>
      Object.keys(options)
        .map( key => options[key].prettyPrint)
        .join('\n');

  const prompt =
    options => options + chalk.yellow('\noption> ');

  read(
    { prompt: prompt( optionsString( options(news) ) ) },
    (_, data) => exec('open ' + options(news)[data].link, () => console.log('opened'))
  );

});
