import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'

export default function CleanPage() {
  headers()
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-4 px-6 py-24">
      <h1 className="text-3xl font-semibold">Public Page</h1>
      <p>This route is available without authentication.</p>
    </main>
  )
}
