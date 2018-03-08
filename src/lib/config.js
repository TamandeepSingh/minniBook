module.exports = {
  SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY',
  backend: {
    hapiRemote: true,
    hapiLocal: false,
    parseRemote: false,
    parseLocal: false
  },
  HAPI: {
    local: {
      url: 'http://192.168.178.21:5000'
    },
    remote: {
      url: 'http://159.89.42.196:46551'
    }
  },
  PARSE: {
    appId: 'snowflake',                              // match APP_ID in parse-server's index.js
    local: {
      url: 'http://localhost:1337/parse'             // match SERVER_URL in parse-server's index.js
    },
    remote: {
      url: 'http://snowflake-parse.herokuapp.com/parse'   // match SERVER_URL in parse-server's index.js
    }
  }
}
