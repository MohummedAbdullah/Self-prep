import { ModuleLayout } from '../components/ModuleLayout';
import { TopicCard } from '../components/TopicCard';
import { QuestionAccordion } from '../components/QuestionAccordion';
import { javascriptData } from './data';

export default function Page() {
  return (
    <ModuleLayout
      title="JavaScript"
      description="Core JavaScript concepts, ES6+ features, async programming, and browser fundamentals"
      icon="⚡"
      sections={[
        { id: 'overview', title: 'Overview' },
        { id: 'technical-terms', title: 'Technical Terms' },
        { id: 'topics', title: 'Key Topics' },
        { id: 'interview-questions', title: 'Interview Questions' },
      ]}
    >
      <section id="overview" className="mb-12">
        <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why JavaScript Matters</h2>
          <p className="text-slate-300 mb-4">
            This module focuses on the fundamentals and interview-critical concepts for JavaScript. Use it to build
            strong mental models, sharpen terminology, and practice common interview questions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-400 mb-2">Concepts</h3>
              <p className="text-sm text-slate-400">Core ideas and patterns you will use daily</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-400 mb-2">Practical Skills</h3>
              <p className="text-sm text-slate-400">Hands-on knowledge for real projects</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-400 mb-2">Interview Focus</h3>
              <p className="text-sm text-slate-400">Typical questions and expected depth</p>
            </div>
          </div>
        </div>
      </section>

      <section id="technical-terms" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Technical Terms Glossary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {javascriptData.technicalTerms.map((term) => (
            <div
              key={term.term}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-amber-500/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-amber-400 mb-2">{term.term}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{term.definition}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs px-2 py-1 bg-slate-800 text-slate-400 rounded">{term.category}</span>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    term.importance === 'high'
                      ? 'bg-red-500/10 text-red-400'
                      : term.importance === 'medium'
                        ? 'bg-yellow-500/10 text-yellow-400'
                        : 'bg-green-500/10 text-green-400'
                  }`}
                >
                  {term.importance} priority
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="topics" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Key Topics</h2>
        <div className="space-y-6">
          {javascriptData.topics.map((topic, index) => (
            <TopicCard
              key={topic.title}
              index={index}
              title={topic.title}
              description={topic.description}
              content={topic.content}
              code={topic.code}
              language={topic.language}
              codeSamples={topic.codeSamples}
            />
          ))}
        </div>
      </section>

      <section id="interview-questions" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Interview Questions</h2>

        <div className="mb-6 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <span className="text-slate-400 text-sm">Easy</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="text-slate-400 text-sm">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="text-slate-400 text-sm">Hard</span>
          </div>
        </div>

        <div className="space-y-3">
          {javascriptData.questions.map((question, index) => (
            <QuestionAccordion key={`${question.question}-${index}`} question={question} index={index} />
          ))}
        </div>
      </section>
    </ModuleLayout>
  );
}
