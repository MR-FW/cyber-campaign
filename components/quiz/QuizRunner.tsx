"use client";

import { useState } from "react";
import { quizQuestions } from "@/app/quiz/quizData";

export default function QuizRunner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(quizQuestions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);

  const total = quizQuestions.length;
  const current = quizQuestions[currentIndex];
  const selected = answers[currentIndex];
  const hasAnswered = selected !== -1;
  const isCorrect = hasAnswered && selected === current.correctIndex;
  const isLast = currentIndex === total - 1;
  const isFirst = currentIndex === 0;

  const handleSelect = (optionIndex: number) => {
    const next = [...answers];
    next[currentIndex] = optionIndex;
    setAnswers(next);
  };

  const handleNext = () => {
    if (isLast) {
      setShowResults(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirst) setCurrentIndex((i) => i - 1);
  };

  let score = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === quizQuestions[i].correctIndex) score += 1;
  }
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const feedback =
    pct >= 80
      ? "Solid grasp of the material. Revisit the topic pages to consolidate."
      : pct >= 60
        ? "Good portion understood. Review domains, threats, and practices before retrying."
        : "Revise the topic pages (Domains, Threats, Practices, Emerging) before retaking.";

  if (showResults) {
    return (
      <div className="border-l-4 border-amber-500/70 bg-stone-900/40 pl-6 pr-6 py-8">
        <h2 className="text-xl font-bold text-stone-100 mb-1">📝 Quiz complete</h2>
        <p className="text-2xl font-semibold text-amber-500/90 mb-4">
          🔒 {score} / {total} correct
        </p>
        <p className="text-stone-500 text-sm mb-6">{feedback}</p>
        <button
          type="button"
          onClick={() => {
            setCurrentIndex(0);
            setAnswers(Array(total).fill(-1));
            setShowResults(false);
          }}
          className="px-4 py-2 text-sm font-medium text-[#0a0908] bg-amber-500 hover:bg-amber-400 transition-colors"
        >
          🔄 Try again
        </button>
      </div>
    );
  }

  return (
    <div className="border-l-4 border-amber-500/70 bg-stone-900/40 pl-5 pr-5 py-6 sm:py-8">
      <p className="text-xs font-medium text-amber-500/90 mb-2">
        📝 Question {currentIndex + 1} of {total}
      </p>
      <h2 className="text-lg font-semibold text-stone-100 mb-5 leading-snug">
        {current.question}
      </h2>
      <ul className="space-y-2">
        {current.options.map((option: string, i: number) => {
          const isChosen = selected === i;
          const showCorrect = hasAnswered && i === current.correctIndex;
          const showWrong = hasAnswered && isChosen && !isCorrect;
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => !hasAnswered && handleSelect(i)}
                disabled={hasAnswered}
                className={`w-full border px-4 py-3 text-left text-sm font-medium transition-colors disabled:cursor-default ${
                  showCorrect
                    ? "border-emerald-600/50 bg-emerald-500/15 text-stone-100"
                    : showWrong
                      ? "border-red-500/40 bg-red-500/10 text-stone-400"
                      : isChosen
                        ? "border-amber-500/50 bg-amber-500/15 text-stone-100"
                        : "border-stone-600 bg-stone-800/30 text-stone-400 hover:bg-stone-700/40"
                }`}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>

      {hasAnswered && (
        <div className="mt-5 border-l-2 border-stone-600 pl-4 py-2">
          <p className={`font-semibold text-sm mb-1 ${isCorrect ? "text-emerald-500/90" : "text-red-400/90"}`}>
            {isCorrect ? "✓ Correct!" : "✗ Incorrect."}
          </p>
          <p className="text-sm text-stone-500 leading-relaxed">
            {current.explanation}
          </p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={isFirst}
          className="px-4 py-2 text-sm text-stone-500 hover:text-amber-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="px-4 py-2 text-sm font-medium text-[#0a0908] bg-amber-500 hover:bg-amber-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLast ? "See results" : "Next"}
        </button>
      </div>
    </div>
  );
}
