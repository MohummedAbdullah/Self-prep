import { ModuleLayout } from '../components/ModuleLayout';
import { TopicCard } from '../components/TopicCard';
import { QuestionAccordion } from '../components/QuestionAccordion';
import { genericData } from './data';

export default function GenericPage() {
  return (
    <ModuleLayout
      title="Generic Concepts"
      description="Master programming fundamentals, data structures, algorithms, and design patterns that apply across all languages and frameworks"
      icon="📚"
      sections={[
        { id: 'overview', title: 'Overview' },
        { id: 'technical-terms', title: 'Technical Terms' },
        { id: 'topics', title: 'Key Topics' },
        { id: 'interview-questions', title: 'Interview Questions' },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why Generic Concepts Matter</h2>
          <p className="text-slate-300 mb-4">
            Before diving into specific frameworks or languages, understanding core computer science concepts
            is essential. These fundamentals—data structures, algorithms, and design patterns—are the
            building blocks that every software engineer needs, regardless of their tech stack. Interviewers
            often test these concepts because they reveal how you think about problems, not just what syntax
            you've memorized.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-400 mb-2">Data Structures</h3>
              <p className="text-sm text-slate-400">Arrays, linked lists, trees, graphs, hash tables, and when to use each</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-400 mb-2">Algorithms</h3>
              <p className="text-sm text-slate-400">Sorting, searching, recursion, dynamic programming, Big O analysis</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-400 mb-2">Design Patterns</h3>
              <p className="text-sm text-slate-400">SOLID principles, creational, structural, and behavioral patterns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Terms */}
      <section id="technical-terms" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Technical Terms Glossary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {genericData.technicalTerms.map((term) => (
            <div
              key={term.term}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">{term.term}</h3>
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

      {/* Topics */}
      <section id="topics" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Key Topics</h2>
        <div className="space-y-6">
          {genericData.topics.map((topic, index) => (
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

      {/* Interview Questions */}
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
          {genericData.questions.map((question, index) => (
            <QuestionAccordion key={`${question.question}-${index}`} question={question} index={index} />
          ))}
        </div>
      </section>
    </ModuleLayout>
  );
}
