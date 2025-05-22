const axios = require("axios");

async function summarizeTodos(todos) {
  const prompt = `Summarize the following list of tasks:\n\n${todos
    .map((todo, i) => `${i + 1}. ${todo.task}`)
    .join("\n")}`;

  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "mistralai/mistral-7b-instruct",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": `${process.env.PORT}`,
        "X-Title": "ToDo Summary App",
      },
    }
  );

  return response.data.choices[0].message.content.trim();
}

module.exports = { summarizeTodos };
