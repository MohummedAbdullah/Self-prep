import Link from 'next/link';

export function ApiErrorState({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-2 text-sm text-slate-200">{message}</p>
      <p className="mt-4 text-xs text-slate-400">
        Check <code className="font-mono">NEXT_PUBLIC_API_URL</code> and that your backend is running and reachable.
      </p>
      <div className="mt-5 flex items-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

