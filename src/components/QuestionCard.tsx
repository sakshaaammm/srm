import { motion } from "framer-motion";
import type { QuizQuestion } from "@/data/quizQuestions";

interface QuestionCardProps {
  question: QuizQuestion;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  direction: number;
}

const QuestionCard = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  direction,
}: QuestionCardProps) => {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      key={question.id}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full max-w-md mx-auto"
    >
      {/* Question with gradient background - no border */}
      <div className="quiz-question-gradient rounded-xl px-6 py-4 mb-4">
        <p className="text-foreground text-center text-sm font-medium">
          {question.id}. {question.question}
        </p>
      </div>

      {/* Options with double border */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onSelectAnswer(index)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
              selectedAnswer === index
                ? "quiz-question-gradient border-[#A8DCF0] text-foreground"
                : "bg-white quiz-option-border text-foreground hover:bg-[#F8FCFD]"
            }`}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;
