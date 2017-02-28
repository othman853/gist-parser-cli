const got = require('got');

const headers = { 'User-Agent': 'curl/7.43.0' };

got('wttr.in?lang=pt', { headers })
  .then(response => console.log(response.body));
