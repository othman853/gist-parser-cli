const PROTOCOL = 'https'
const HOST = 'api.github.com';

const endpoints = {
  gists: user => `/users/${user}/gists`,
  gist: id => `/gists/${id}`
};

const url = endpoint => `${PROTOCOL}://${HOST}${endpoint}`

module.exports = {
  PROTOCOL,
  HOST,
  endpoints,
  gists: user => url(endpoints.gists(user)),
  gist: id => url(endpoints.gist(id))
};
