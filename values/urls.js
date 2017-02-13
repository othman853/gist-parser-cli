const PROTOCOL = 'https'
const HOST = 'api.github.com';

const endpoints = {
  gist: user => `/users/${user}/gists`
};

const url = endpoint => `${PROTOCOL}://${HOST}${endpoint}`

module.exports = {
  PROTOCOL,
  HOST,
  endpoints,
  gist: user => url(endpoints.gist(user))
};
