import { headers } from 'next/headers'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function Home() {
  headers()
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-6 px-6 py-24">
      <h1 className="text-3xl font-semibold">Sample App</h1>
      <div className="flex gap-4">
        <Link className="underline" href="/clean">
          /clean
        </Link>
        <Link className="underline" href="/protected">
          /protected
        </Link>
      </div>
      <p>This app includes one public page and one protected page.</p>
      <p>The protected route is guarded by server-side proxy logic.</p>
    </main>
  )
}
