// @flow
// Inspired by: https://github.com/davidchambers/Base64.js/blob/master/base64.js

const Base64 = {
  btoa: (input = '')  => {
    if (btoa) return btoa(input);    
    throw(new Error('Btoa not found'))
  }
};

export default Base64;