const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const quotePromises= urls.map(async (url) => {
    const response = await httpGet(url);
    return { 
      [response.status === 200 ? 'Arnie Quote' : 'FAILURE']: JSON.parse(response.body).message 
    };
  });

  return Promise.all(quotePromises);
};

module.exports = {
  getArnieQuotes,
};
