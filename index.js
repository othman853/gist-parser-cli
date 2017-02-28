require('value-box/path')(__dirname, ['/values']);
const { urls, github, secrets } = require('value-box');
const got = require('got');

const GISTS_ENDPOINT = urls.gist(github.boredomGistId);
const query = { access_token: secrets.GITHUB_TOKEN };

const simplifyFiles = files =>
  Object.keys(files).map(name => ({
    name: files[name].filename,
    raw: files[name].raw_url
  }));

const simplify = gist => ({
  description: gist.description,
  files: simplifyFiles(gist.files)
});


got(GISTS_ENDPOINT, { query })
  .then(response =>
    console.log(simplify(JSON.parse(response.body)))
  );
