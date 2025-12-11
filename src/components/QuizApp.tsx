import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { quizQuestions } from "@/data/quizQuestions";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import NavigationButtons from "./NavigationButtons";
import ResultsScreen from "./ResultsScreen";
import CatMascot from "./CatMascot";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [direction, setDirection] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = useCallback((index: number) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = index;
      return newAnswers;
    });
  }, [currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentQuestion < quizQuestions.length - 1) {
      setDirection(1);
      setCurrentQuestion((prev) => prev + 1);
    }
  }, [currentQuestion]);

  const handlePrev = useCallback(() => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const handleSubmit = useCallback(() => {
    setShowResults(true);
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers(new Array(quizQuestions.length).fill(null));
    setDirection(1);
    setShowResults(false);
  }, []);

  const calculateScore = useCallback(() => {
    return answers.reduce((score, answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  }, [answers]);

  const isLastQuestion = currentQuestion === quizQuestions.length - 1;
  const hasCurrentAnswer = answers[currentQuestion] !== null;

  return (
    <div className="min-h-screen quiz-outer-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Main Quiz Card with shadow wrapper - more rectangular */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl quiz-card-outer-shadow rounded-2xl relative"
      >
        <div className="w-full quiz-page-bg rounded-xl p-8 pb-8 relative overflow-hidden">
          {!showResults ? (
            <>
              {/* Title with gradient text */}
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-title text-4xl italic text-center quiz-title-gradient mb-2 tracking-wide"
              >
                Test Your Knowledge
              </motion.h1>

              {/* Subtitle with white background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center mb-8"
              >
                <span className="text-xs text-muted-foreground bg-white px-3 py-1 rounded">
                  Answer all questions to see your results
                </span>
              </motion.div>

              {/* Progress Bar */}
              <ProgressBar
                total={quizQuestions.length}
                current={currentQuestion}
              />

              {/* Question Card */}
              <AnimatePresence mode="wait" custom={direction}>
                <QuestionCard
                  key={currentQuestion}
                  question={quizQuestions[currentQuestion]}
                  selectedAnswer={answers[currentQuestion]}
                  onSelectAnswer={handleSelectAnswer}
                  direction={direction}
                />
              </AnimatePresence>

              {/* Navigation */}
              <NavigationButtons
                onPrev={handlePrev}
                onNext={handleNext}
                canGoPrev={currentQuestion > 0}
                canGoNext={hasCurrentAnswer && !isLastQuestion}
                isLastQuestion={isLastQuestion}
                onSubmit={handleSubmit}
                hasAnswer={hasCurrentAnswer}
              />
            </>
          ) : (
            <ResultsScreen
              score={calculateScore()}
              total={quizQuestions.length}
              onRestart={handleRestart}
            />
          )}
        </div>

        {/* Cat Mascot - positioned with "Best" on outer background */}
        {!showResults && (
          <div className="absolute -left-12 bottom-2 z-20">
            <CatMascot />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default QuizApp;
