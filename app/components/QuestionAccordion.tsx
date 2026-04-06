'use client';

import { useState } from 'react';
import type { InterviewQuestion } from '../data/modules';

interface QuestionAccordionProps {
  question: InterviewQuestion;
  index?: number;
}

const difficultyStyles = {
  easy: 'bg-green-500/10 text-green-400 border-green-500/20',
  medium: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  hard: 'bg-red-500/10 text-red-400 border-red-500/20',
};

const difficultyLabels = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};

export function QuestionAccordion({ question }: QuestionAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg border border-slate-700/50 bg-slate-900/50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-start gap-3 text-left hover:bg-slate-800/50 transition-colors"
      >
        {/* Difficulty Badge */}
        <span
          className={`flex-shrink-0 px-2 py-0.5 text-xs font-medium rounded border ${difficultyStyles[question.difficulty]}`}
        >
          {difficultyLabels[question.difficulty]}
        </span>

        {/* Question Text */}
        <span className="flex-1 text-sm text-slate-200 font-medium">
          {question.question}
        </span>

        {/* Chevron */}
        <svg
          className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
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

      {/* Answer */}
      {isOpen && (
        <div className="px-4 pb-4 pt-0">
          <div className="pl-[calc(2.5rem+8px)] border-l-2 border-cyan-500/30 ml-4">
            <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
              {question.answer}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
