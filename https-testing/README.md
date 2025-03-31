# HTTPS Testing Setup

This directory contains the necessary files to test the chat client over HTTPS locally.

## Files

- `localhost+2.pem` and `localhost+2-key.pem`: SSL certificates for local HTTPS
- `server.js`: HTTPS server for serving the test page
- `test-embed.html`: Test page that embeds the chat client
- `README.md`: This file

## Setup

1. Make sure you have Node.js installed
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Test Environment

1. Start the Vite development server (from the project root):
   ```bash
   pnpm dev
   ```

2. Start the HTTPS server (from this directory):
   ```bash
   node server.js
   ```

3. Visit https://localhost:8443 in your browser
   - You'll need to accept the self-signed certificate warning the first time

## Using the Chat Client on Other Websites

To embed the chat client on other HTTPS websites, use this iframe code:

```html
<iframe 
  src="https://localhost:5173" 
  style="position: fixed; bottom: 20px; right: 20px; width: 400px; height: 600px; border: none; z-index: 999999;"
  allow="microphone"
></iframe>
```

Note: Replace `localhost:5173` with your actual deployed chat client URL when deploying to production. 