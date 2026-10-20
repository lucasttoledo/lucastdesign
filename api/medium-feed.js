const mediumFeedUrl = 'https://medium.com/feed/@lucastdesign'

export async function fetchMediumFeed() {
  const feedResponse = await fetch(mediumFeedUrl, {
    signal: AbortSignal.timeout(10000),
  })

  if (!feedResponse.ok) {
    throw new Error(`Medium respondeu com status ${feedResponse.status}.`)
  }

  return feedResponse.text()
}

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET')
    response.statusCode = 405
    response.end('Method Not Allowed')
    return
  }

  try {
    response.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
    response.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    response.statusCode = 200
    response.end(await fetchMediumFeed())
  } catch (error) {
    console.error('Não foi possível buscar o feed do Medium.', error)
    response.setHeader('Content-Type', 'application/json; charset=utf-8')
    response.statusCode = 502
    response.end(JSON.stringify({ error: 'Não foi possível carregar o feed do Medium.' }))
  }
}
