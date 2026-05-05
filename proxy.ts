import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const secretKey = request.headers.get('secretkey')

  if (
    (pathname === '/protected' || pathname === '/protected/' || pathname.startsWith('/protected/')) &&
    secretKey !== 'punkaf'
  ) {
    return new NextResponse(
      `Forbidden: missing or invalid secretkey header (pathname=${pathname})`,
      {
        status: 403,
      }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/protected', '/protected/:path*'],
}
