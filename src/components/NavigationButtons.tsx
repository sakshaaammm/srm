import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
  onSubmit: () => void;
  hasAnswer: boolean;
}

const NavigationButtons = ({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
  isLastQuestion,
  onSubmit,
  hasAnswer,
}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-end items-center gap-2 mt-6">
      {!isLastQuestion ? (
        <>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onPrev}
            disabled={!canGoPrev}
            className={`quiz-nav-button w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
              canGoPrev
                ? "bg-[#E8F7FB] text-[#3CABDA] hover:bg-[#D4EEF8]"
                : "bg-[#E8F7FB] text-[#9AD8ED] cursor-not-allowed"
            }`}
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={2} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
            disabled={!canGoNext}
            className={`quiz-nav-button w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
              canGoNext
                ? "bg-[#E8F7FB] text-[#3CABDA] hover:bg-[#D4EEF8]"
                : "bg-[#E8F7FB] text-[#9AD8ED] cursor-not-allowed"
            }`}
          >
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </motion.button>
        </>
      ) : (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSubmit}
          disabled={!hasAnswer}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            hasAnswer
              ? "bg-[#15313D] text-white hover:opacity-90"
              : "bg-[#D9F4FA] text-muted-foreground cursor-not-allowed"
          }`}
        >
          Submit
        </motion.button>
      )}
    </div>
  );
};

export default NavigationButtons;
