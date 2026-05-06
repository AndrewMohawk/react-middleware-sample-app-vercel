import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const cache = (globalThis as typeof globalThis & {
      __incrementalCache?: {
        cacheHandler?: {
          cacheEndpoint?: string | null
          headers?: Record<string, string> | null
        }
      }
    }).__incrementalCache
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
