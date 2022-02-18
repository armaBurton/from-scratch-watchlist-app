const request = require('superagent');
const fetch = require('node-fetch');

require('dotenv').config();

exports.handler = async (event) => {
  try {

    const response = await fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/volley', {
      // 'method': 'GET',
      'headers': {
        'x-rapidapi-host': process.env.REACT_APP_X_RAPIDAPI_HOST,
        'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY
      }
    });
    const data = await response.json();
    console.log(`|| data >`, data);
    return {
      statusCode:200, 
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};