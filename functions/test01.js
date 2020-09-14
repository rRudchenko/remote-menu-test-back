const axios = require('axios')
exports.handler = async function handler(event, context) {
  event ? console.log('\n\nevent:\n\n', event) : console.log('\n\n NO event\n\n')
  context ? console.log('\n\ncontext:\n\n', context) : console.log('\n\n NO context\n\n')
  try {
    const response = await axios.get('https://icanhazdadjoke.com', {
      headers: { Accept: 'application/json' },
    })
    const data = response.data
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
