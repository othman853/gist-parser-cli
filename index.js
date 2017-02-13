const got = require('got');

const path = require('value-box/path');
path(__dirname, ['/values']);

const { urls, github, secrets } = require('value-box');

const GISTS_ENDPOINT = urls.gist(github.username);
const query = { access_token: secrets.GITHUB_TOKEN };

got(GISTS_ENDPOINT, { query }).then(console.log);
