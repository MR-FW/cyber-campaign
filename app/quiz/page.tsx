import Section from "@/components/ui/Section";
import QuizRunner from "@/components/quiz/QuizRunner";

export const metadata = {
  title: "Quiz | Cyber Campaign",
  description: "Test your cyber security knowledge with multiple-choice questions on domains, threats, practices, and emerging tech.",
};

export default function QuizPage() {
  return (
    <Section className="pb-16">
      <h1 className="text-2xl font-bold text-stone-100 mb-1">📝 Cyber Security Quiz</h1>
      <p className="text-stone-500 text-sm mb-6 max-w-2xl">
        Multiple-choice questions to test your understanding. One question at a time; you can go back to change an answer before viewing results.
      </p>
      <QuizRunner />
    </Section>
  );
}
