const fetch = require('node-fetch');

require('dotenv').config();
exports.handler = async () => {
  try {
    const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards?x-rapidapi-host=${process.env.X_RAPIDAPI_HOST}&x-rapidapi-key=${process.env.X_RAPIDAPI_KEY}`);
    const json = await response.json();

    return { 
      statusCode: 200, 
      // body: JSON.stringify(json.businesses),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};