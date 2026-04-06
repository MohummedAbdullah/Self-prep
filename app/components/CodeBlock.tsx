'use client';

import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  title?: string;
  showLineNumbers?: boolean;
  wrap?: boolean;
}

export function CodeBlock({
  code,
  language = 'typescript',
  filename,
  title,
  showLineNumbers = true,
  wrap = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isWrapped, setIsWrapped] = useState(wrap);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting helper
  const highlightCode = (code: string): string => {
    return code
      // Keywords
      .replace(/\b(const|let|var|function|return|if|else|for|while|switch|case|break|import|export|from|class|interface|type|extends|implements|new|this|async|await|try|catch|throw|typeof|instanceof)\b/g, '<span class="text-pink-400">$1</span>')
      // Functions
      .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g, '<span class="text-cyan-400">$1</span>')
      // Strings
      .replace(/(['"`])(.*?)(?<!\\)\1/g, '<span class="text-green-400">$1$2$1</span>')
      // Numbers
      .replace(/\b\d+\b/g, '<span class="text-orange-400">$&</span>')
      // Comments
      .replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, '<span class="text-slate-500">$1</span>')
      // Types (capitalized words)
      .replace(/\b([A-Z][a-zA-Z0-9_$]*)\b/g, '<span class="text-yellow-400">$1</span>');
  };

  const lines = code.split('\n');

  return (
    <div className="rounded-lg overflow-hidden border border-slate-700 bg-slate-950">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          {filename && (
            <span className="ml-3 text-xs text-slate-400 font-mono">{filename}</span>
          )}
          {!filename && title && (
            <span className="ml-3 text-xs text-slate-400 font-mono">{title}</span>
          )}
          {!filename && !title && (
            <span className="ml-3 text-xs text-slate-500 uppercase">{language}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsWrapped((prev) => !prev)}
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            {isWrapped ? 'No Wrap' : 'Wrap'}
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="relative overflow-x-auto">
        <pre className="flex text-sm font-mono leading-relaxed">
          {/* Line Numbers */}
          {showLineNumbers && (
            <div className="flex-shrink-0 px-4 py-4 text-right text-slate-600 select-none bg-slate-900/50 border-r border-slate-800">
              {lines.map((_, i) => (
                <div key={i} className="leading-relaxed">
                  {i + 1}
                </div>
              ))}
            </div>
          )}
          {/* Code */}
          <code className={`flex-1 px-4 py-4 text-slate-300 ${isWrapped ? 'whitespace-pre-wrap' : 'overflow-x-auto'}`}>
            {lines.map((line, i) => (
              <div
                key={i}
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: highlightCode(line) || '&nbsp;' }}
              />
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
