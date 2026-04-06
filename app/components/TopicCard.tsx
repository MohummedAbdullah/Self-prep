'use client';

import { useState } from 'react';
import { CodeBlock } from './CodeBlock';
import { QuestionAccordion } from './QuestionAccordion';
import type { InterviewQuestion } from '../data/modules';

interface TopicCardProps {
  title: string;
  content: string;
  description?: string;
  code?: string;
  language?: string;
  codeSamples?: {
    code: string;
    language?: string;
    filename?: string;
    label?: string;
  }[];
  questions?: InterviewQuestion[];
  index?: number;
  id?: string;
}

export function TopicCard({
  title,
  content,
  description,
  code,
  language,
  codeSamples,
  questions,
  index,
  id,
}: TopicCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCodeIndex, setActiveCodeIndex] = useState(0);
  const previewText = description ?? content;
  const resolvedSamples = codeSamples && codeSamples.length > 0
    ? codeSamples
    : code
      ? [{ code, language }]
      : [];

  return (
    <div
      id={id}
      className="group rounded-xl border border-slate-700 bg-slate-800/50 overflow-hidden hover:border-cyan-500/30 transition-all"
    >
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-5 flex items-start justify-between text-left"
      >
        <div className="flex items-start gap-4">
          {typeof index === 'number' && (
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 text-sm font-semibold">
              {index + 1}
            </span>
          )}
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            <p className="mt-1 text-slate-400 text-sm line-clamp-2">
              {previewText.substring(0, 120)}...
            </p>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-slate-500 flex-shrink-0 ml-4 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-slate-700/50">
          {/* Full Description */}
          <div className="pt-5">
            <div className="prose prose-invert prose-slate max-w-none">
              <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                {content}
              </p>
            </div>
          </div>

          {/* Code Example */}
          {resolvedSamples.length > 0 && (
            <div className="mt-6">
              {resolvedSamples.length > 1 && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {resolvedSamples.map((sample, i) => (
                    <button
                      key={`${sample.label ?? sample.filename ?? sample.language ?? 'code'}-${i}`}
                      onClick={() => setActiveCodeIndex(i)}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                        i === activeCodeIndex
                          ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/40'
                          : 'bg-slate-900/60 text-slate-400 border-slate-700 hover:border-cyan-500/30 hover:text-slate-200'
                      }`}
                    >
                      {sample.label ?? sample.filename ?? sample.language ?? `Example ${i + 1}`}
                    </button>
                  ))}
                </div>
              )}
              <CodeBlock
                code={resolvedSamples[activeCodeIndex].code}
                language={resolvedSamples[activeCodeIndex].language ?? language}
                filename={resolvedSamples[activeCodeIndex].filename}
                title={resolvedSamples[activeCodeIndex].label}
              />
            </div>
          )}

          {/* Interview Questions */}
          {questions && questions.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Interview Questions ({questions.length})
              </h4>
              <div className="space-y-3">
                {questions.map((q, idx) => (
                  <QuestionAccordion key={idx} question={q} index={idx} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
