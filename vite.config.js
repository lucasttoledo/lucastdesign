import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fetchMediumFeed } from './api/medium-feed.js'

function mediumFeedMiddleware() {
  return {
    name: 'medium-feed-middleware',
    configureServer(server) {
      server.middlewares.use('/api/medium-feed', async (request, response) => {
        if (request.method !== 'GET') {
          response.setHeader('Allow', 'GET')
          response.statusCode = 405
          response.end('Method Not Allowed')
          return
        }

        try {
          response.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
          response.setHeader('Cache-Control', 'no-store')
          response.statusCode = 200
          response.end(await fetchMediumFeed())
        } catch (error) {
          console.error('Não foi possível buscar o feed do Medium.', error)
          response.setHeader('Content-Type', 'application/json; charset=utf-8')
          response.statusCode = 502
          response.end(JSON.stringify({ error: 'Não foi possível carregar o feed do Medium.' }))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), mediumFeedMiddleware()],
})