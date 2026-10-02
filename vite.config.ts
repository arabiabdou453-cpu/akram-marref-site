import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function avifContentTypePlugin(): Plugin {
  return {
    name: 'avif-content-type',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url.startsWith('/assets/')) {
          const filePath = path.join(__dirname, 'public', url);
          if (fs.existsSync(filePath)) {
            try {
              const fd = fs.openSync(filePath, 'r');
              const buf = Buffer.alloc(16);
              fs.readSync(fd, buf, 0, 16, 0);
              fs.closeSync(fd);
              if (buf.toString('utf8', 4, 12) === 'ftypavif') {
                res.setHeader('Content-Type', 'image/avif');
              }
            } catch {
              // fallback
            }
          }
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), avifContentTypePlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: false,
    cors: true
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    cors: true
  }
});
