const axios = require("axios");

const httpClientPlugin = {
  get: async (url) => {
    // podría colocar fetch o axios depende el caso
    const { data } = await axios.get(url);
    return data;
    // const resp = await fetch( url );
    // return await resp.json();
  },

  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url) => {},
};

module.exports = {
  http: httpClientPlugin,
};
