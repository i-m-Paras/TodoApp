# TodoApp

```markdown
# ✅ Todo Summary Assistant

A full-stack to-do list application with AI-powered summarization and Slack integration. Users can create, manage, and summarize their tasks using an LLM (OpenAI GPT) and send the summary to a Slack channel in one click.

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Axios for API calls
- Vercel for deployment

### Backend
- Node.js (Express)
- OpenAI API for LLM summarization
- Slack Webhook integration
- Supabase for data persistence (or optional local in-memory storage)
- Vercel Serverless Functions for deployment

---

## 🚀 Live Demo

- Frontend: [https://todo-app-cyan-sigma.vercel.app](https://todo-app-cyan-sigma.vercel.app)
- Backend: [https://todo-app-backend-weld-nu.vercel.app](https://todo-app-backend-weld-nu.vercel.app)

---

## 🧩 Features

- Add, view, and delete to-do items.
- Real-time fetch of todos from the backend.
- Summarize pending to-dos using a real LLM.
- Send the generated summary to a Slack channel.
- Display success/failure feedback to the user.

---

## 📦 Folder Structure

```

root/
├── frontend/         # React app
│   └── src/
│       └── services/api.js
├── backend/
│   ├── api/
│   │   └── index.js  # Express server (deployed as Vercel serverless function)
│   ├── vercel.json
│   └── package.json

````

---

## 🔧 Setup Instructions

### 1. Clone the repo

```bash
git clone [https://github.com/yourusername/todo-summary-assistant.git](https://github.com/i-m-Paras/TodoApp.git)
cd TodoApp
````

---

### 2. Setup Environment Variables

Create `.env` files in both `frontend/` and `backend/` directories.

#### 📁 frontend/.env

```env
VITE_API_BASE_URL=https://your-backend-url.vercel.app
```

#### 📁 backend/.env

```env
OPENAI_API_KEY=your-openai-key
SLACK_WEBHOOK_URL=your-slack-webhook-url
```

> Refer to `.env.example` for all required environment variables.

---

### 3. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

---

### 4. Run Locally (Optional)

#### Backend

```bash
cd backend
node api/index.js
```

#### Frontend

```bash
cd frontend
npm run dev
```

---

## 🤖 LLM Setup (OpenAI)

1. Go to [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
2. Generate an API key.
3. Add it to your `.env` as `OPENAI_API_KEY`.

This app uses OpenAI’s GPT model to generate a meaningful summary of pending to-dos.

---

## 💬 Slack Webhook Setup

1. Go to your Slack workspace.
2. Create an [Incoming Webhook](https://api.slack.com/messaging/webhooks).
3. Copy the webhook URL and add it to `.env` as `SLACK_WEBHOOK_URL`.

The summary will be posted directly to the channel you specify during setup.

---

## 🧠 Design Decisions

* Used Vercel’s Serverless Functions to host the Express backend.
* Axios used for API calls for simplicity and reliability.
* Kept backend stateless using in-memory todos (can easily be upgraded to Supabase or PostgreSQL).
* LLM summarization logic is backend-controlled to avoid leaking API keys on frontend.

---

## 🌐 Deployment

* Frontend and backend both deployed to **Vercel**
* Custom domains or alternate deployment options (Render, Railway) are possible

---

## 📁 Example `.env.example`

```env
# Frontend
VITE_API_BASE_URL=https://todo-app-backend.vercel.app

# Backend
OPENAI_API_KEY=sk-xxx
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx/yyy/zzz
```

---

## 🧪 Testing

* Add todos using the input field.
* Click **“Summarize & Send to Slack”**.
* Confirm message delivery in Slack.
* Check error/success feedback on frontend.

---
