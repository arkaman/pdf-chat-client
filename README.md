# 📄 PDF Chat Frontend

A modern React frontend for a Retrieval-Augmented Generation (RAG) PDF chat assistant. Upload one or more PDF documents and ask natural language questions about their contents through an intuitive chat interface.

Built with React, TypeScript, Vite, and Shadcn UI.

Link to the backend repo: [github.com/arkaman/pdf-chat-api](https://github.com/arkaman/pdf-chat-api)

---

## ✨ Features

* 📄 Upload one or multiple PDF documents
* 🗑️ Remove uploaded documents
* 💬 Interactive AI chat interface
* 🤖 Loading indicators while the assistant generates responses
* 📋 Document metadata display

  * File size
  * Character count
  * Chunk count
  * Indexing status
* 📱 Responsive layout for desktop and mobile
* 🎨 Modern UI built with [Shadcn UI](https://ui.shadcn.com)
* ⚡ Fast development experience with Vite

---

## 🖼️ Preview

### Upload PDFs

* Upload one or multiple PDF documents
* View indexed document information
* Remove documents from the knowledge base

### Chat with your PDFs

* Ask questions in natural language
* Receive AI-generated responses
* Automatic scrolling during conversations
* Assistant loading state while waiting for responses

---

## 🛠️ Tech Stack

| Technology   | Purpose               |
| ------------ | --------------------- |
| React 19     | UI Library            |
| TypeScript   | Type Safety           |
| Vite         | Build Tool            |
| Shadcn UI    | UI Components         |
| Tailwind CSS | Styling               |
| Lucide React | Icons                 |

---

## 📂 Project Structure

```text
src/
│
├── api/
│   ├── client.ts
│   ├── pdf.ts
│   └── types.ts
│
├── components/
│   ├── chat/
│   ├── ui/
│   ├── app-header.tsx
│   ├── empty-upload.tsx
│   └── upload-attachments.tsx
│
├── hooks/
│   ├── use-chat.ts
│   ├── use-delete-document.ts
│   └── use-upload.ts
│
├── lib/
│
├── App.tsx
└── main.tsx
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/arkaman/pdf-chat-client.git

cd pdf-chat-client
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the project root.

```env
VITE_API_BASE_URL=http://localhost:8000
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 🔌 Backend API

This project is designed to work with the companion FastAPI backend.

Link to the backend repo: [github.com/arkaman/pdf-chat-api](https://github.com/arkaman/pdf-chat-api)

The backend is responsible for:

* PDF parsing
* Text chunking
* Embedding generation
* Vector database indexing
* Retrieval-Augmented Generation (RAG)
* AI response generation

---

## 🧑‍💻 Development

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

---

