type CacheShape = {
  cacheHandler?: {
    cacheEndpoint?: string | null
    headers?: Record<string, string> | null
  }
}

async function getCachedValue() {
  'use cache'

  return {
    value: 'cache-probe',
  }
}

export default async function InspectCachePage() {
  const cached = await getCachedValue()
  const cache = (globalThis as typeof globalThis & {
    __incrementalCache?: CacheShape
  }).__incrementalCache

  const body = JSON.stringify(
    {
      cached,
      hasIncrementalCache: Boolean(cache),
      cacheEndpoint: cache?.cacheHandler?.cacheEndpoint ?? null,
      headers: cache?.cacheHandler?.headers ?? null,
    },
    null,
    2
  )

  return <pre>{body}</pre>
}
