# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Embedding the Chat Client

To embed the chat client on your website, follow these steps:

1. Build the chat client:
```bash
pnpm build
```

2. Deploy the built files to a web server or CDN. The built files will be in the `dist` directory.

3. Add the following code to your website where you want the chat client to appear:

```html
<iframe 
  src="YOUR_DEPLOYED_URL/index.html" 
  style="position: fixed; bottom: 20px; right: 20px; width: 400px; height: 600px; border: none; z-index: 999999;"
  allow="microphone"
></iframe>
```

Replace `YOUR_DEPLOYED_URL` with the URL where you deployed the chat client.

### Important Notes:

- The chat client requires microphone access for voice input features. The `allow="microphone"` attribute is necessary for this functionality.
- The chat client is designed to be positioned in the bottom-right corner of the screen.
- The iframe dimensions (400x600) can be adjusted based on your needs.
- The z-index (999999) ensures the chat client appears above other elements on the page.

### Security Considerations:

- Make sure to deploy the chat client to a secure HTTPS URL.
- Consider implementing Content Security Policy (CSP) headers on your website to control which domains can embed the chat client.
- The chat client should be deployed to a domain that you trust and control.

# Agentforce Chat Client

A modern, responsive chat client for Agentforce that can be embedded on any website.

## Features

- Real-time chat interface
- Voice input support
- Dark/Light theme support
- Responsive design
- Minimizable chat window
- Error boundary handling

## Development

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v8 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jrunrun/sf-agentforce-react-chat-client.git
cd sf-agentforce-react-chat-client
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
pnpm dev
```

5. Build for production:
```bash
pnpm build
```

## Embedding

For detailed instructions on embedding the chat client on your website, see [EMBEDDING.md](EMBEDDING.md).

Quick start:
```html
<iframe 
  src="YOUR_DEPLOYED_URL/index.html" 
  style="position: fixed; bottom: 20px; right: 20px; width: 400px; height: 600px; border: none; z-index: 999999;"
  allow="microphone"
></iframe>
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
