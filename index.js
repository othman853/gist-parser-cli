require('value-box/path')(__dirname, ['/values']);
const { urls, github, secrets } = require('value-box');
const got = require('got');

const GISTS_ENDPOINT = urls.gist(github.username);
const query = { access_token: secrets.GITHUB_TOKEN };

fileNames = files => {
  return Object.keys(files);
};

got(GISTS_ENDPOINT, { query }).then(response => {
  const data = JSON.parse(response.body);

  const simplerData = data.map(
    item => ({
      id: item.id,
      description: item.description || 'No description',
      files: fileNames(item.files)
    })
  );

  simplerData.forEach(
    item => console.log(
      `ID: ${item.id}`+
      `\n` +
      `Description: ${item.description}`+
      `\n`+
      `Files: ${item.files}`+
      `\n`+
      `_______________________________________________________`
    )
  );

});
