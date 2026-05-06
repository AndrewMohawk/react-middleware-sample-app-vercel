export default function handler(_req, res) {
  try {
    const cache = globalThis.__incrementalCache
    const cacheHandler = cache?.cacheHandler

    res.status(200).json({
      ok: true,
      hasIncrementalCache: Boolean(cache),
      cacheEndpoint: cacheHandler?.cacheEndpoint ?? null,
      headers: cacheHandler?.headers ?? null,
    })
    return
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    })
  }
}
