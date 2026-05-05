const protectedValue =
  process.env.PROTECTED_DEMO_SECRET || 'sample-protected-content'

export default function ProtectedPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-4 px-6 py-24">
      <h1 className="text-3xl font-semibold">Protected Page</h1>
      <p>
        <strong>Protected value:</strong> <code>{protectedValue}</code>
      </p>
    </main>
  )
}
