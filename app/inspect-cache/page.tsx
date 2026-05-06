type CacheShape = {
  cacheHandler?: {
    cacheEndpoint?: string | null
    headers?: Record<string, string> | null
  }
}

export default function InspectCachePage() {
  const cache = (globalThis as typeof globalThis & {
    __incrementalCache?: CacheShape
  }).__incrementalCache

  const body = JSON.stringify(
    {
      hasIncrementalCache: Boolean(cache),
      cacheEndpoint: cache?.cacheHandler?.cacheEndpoint ?? null,
      headers: cache?.cacheHandler?.headers ?? null,
    },
    null,
    2
  )

  return <pre>{body}</pre>
}
