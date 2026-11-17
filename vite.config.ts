import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Serve the same directory indexes in development that IONOS serves in production.
function staticPageIndexes(): Plugin {
  return {
    name: 'static-page-indexes',
    configureServer(server) {
      server.middlewares.use((request, _response, next) => {
        const [path, query] = (request.url ?? '').split('?');
        if (/^\/(?:[a-z-]+\/)+$/.test(path)) {
          const index = path + 'index.html';
          if (existsSync(resolve(server.config.publicDir, '.' + index))) {
            request.url = index + (query ? '?' + query : '');
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({ plugins: [staticPageIndexes(), react()] });
