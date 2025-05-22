const express = require('express');
const router = express.Router();
const { getTodos } = require('../services/todos');
const { summarizeTodos } = require('../services/openai');
const { sendToSlack } = require('../services/slack');


router.post('/', async (req, res) => {
  try {
    const todos = await getTodos();
    console.log("todos: ",todos);
    const summary = await summarizeTodos(todos);
    console.log("summary: ",summary);
    const slackRes = await sendToSlack(summary);
    console.log("slackRes: ",slackRes);

    res.status(200).json({ success: true, message: 'Summary sent to Slack!', slackRes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to summarize or send to Slack.' });
  }
});

module.exports = router;
