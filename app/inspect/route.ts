import { NextRequest, NextResponse } from 'next/server'

export function GET(request: NextRequest) {
  const headers = Object.fromEntries(request.headers.entries())
  return NextResponse.json({
    url: request.url,
    method: request.method,
    headers,
    nextUrl: {
      href: request.nextUrl.href,
      pathname: request.nextUrl.pathname,
      search: request.nextUrl.search,
      host: request.nextUrl.host,
      protocol: request.nextUrl.protocol,
    },
  })
}
