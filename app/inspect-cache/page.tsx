import { unstable_cache } from 'next/cache'

type CacheShape = {
  cacheHandler?: {
    cacheEndpoint?: string | null
    headers?: Record<string, string> | null
  }
}

const getCachedValue = unstable_cache(async () => {
  return {
    value: 'cache-probe',
  }
}, ['inspect-cache'])

export default async function InspectCachePage() {
  const cached = await getCachedValue()
  const cache = (globalThis as typeof globalThis & {
    __incrementalCache?: CacheShape
  }).__incrementalCache
  const cacheHandler = cache?.cacheHandler

  const body = JSON.stringify(
    {
      cached,
      hasIncrementalCache: Boolean(cache),
      cacheKeys: cache ? Object.keys(cache as object).sort() : [],
      cacheHandlerType: cacheHandler?.constructor?.name ?? null,
      cacheHandlerKeys: cacheHandler ? Object.keys(cacheHandler as object).sort() : [],
      cacheEndpoint: cacheHandler?.cacheEndpoint ?? null,
      headers: cacheHandler?.headers ?? null,
    },
    null,
    2
  )

  return <pre>{body}</pre>
}
