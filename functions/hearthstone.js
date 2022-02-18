const request = require('superagent');
const fetch = require('node-fetch');

require('dotenv').config();

exports.handler = async (event) => {
  try {
  //   const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards?x-rapidapi-host=omgvamp-hearthstone-v1.p.rapidapi.com&x-rapidapi-key=f351f32ca5msh9d7f14c07a67b64p1ef1bdjsnebe9e76d4ae9`);
  
    // const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards?x-rapidapi-host=omgvamp-hearthstone-v1.p.rapidapi.com&x-rapidapi-key=9182879981msh6217a65e8920b12p1e4338jsnfb0af2c5ad1b`);
    // const json = await response.json();

    const response = await fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/arth', {
      'method': 'GET',
      'headers': {
        'x-rapidapi-host': process.env.REACT_APP_X_RAPIDAPI_HOST,
        'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY
      }
    });

    console.log(`|| response >`, await response.json());

    return { 
      statusCode: 200, 
      // body: JSON.stringify(json),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};