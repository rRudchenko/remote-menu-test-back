const axios = require('axios')
exports.handler = async function handler(event, context) {
  try {
    const response = await axios.get('https://icanhazdadjoke.com', {
      headers: { Accept: 'application/json' },
    })
    const data = response.data
    console.log(' JOKE:\n', data.joke)
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data.joke }),
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'somthing wend wrong, master' }),
    }
  }
}
