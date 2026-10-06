Chat UI for the inference gateway lab with llm-sim, built with [assistant-ui](https://github.com/assistant-ui/assistant-ui). Done by Ivan Tan and Benjamin.

## Getting Started

### 1. Configure Environment Variables

Copy `.env.example` to `.env.local` and point it at the gateway (OpenAI-compatible `/v1/chat/completions`) in front of llm-sim:

```
GATEWAY_BASE_URL=http://localhost:8080/v1
GATEWAY_API_KEY=not-needed
GATEWAY_MODEL=llm-sim
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

You can start customizing the UI by modifying components in the `components/assistant-ui/elements/` directory.

To add more assistant-ui components:

```bash
npx assistant-ui add
```

### Key Files

- `app/assistant.tsx` - Sets up the runtime provider
- `app/api/chat/route.ts` - Chat API endpoint
- `components/assistant-ui/elements/thread.tsx` - Chat thread component
