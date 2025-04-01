// HTTP CONFIG

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })





// FOR HTTPS CONFIG

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.join(__dirname, 'https-testing/localhost+2-key.pem')),
      cert: fs.readFileSync(path.join(__dirname, 'https-testing/localhost+2.pem')),
    },
  },
})

