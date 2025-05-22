const axios = require('axios');

async function sendToSlack(summary) {
  const payload = {
    text: `📝 *To-Do Summary:*\n${summary}`,
  };

  const response = await axios.post(process.env.SLACK_WEBHOOK_URL, payload);

  return response.data;
}

module.exports = { sendToSlack };
