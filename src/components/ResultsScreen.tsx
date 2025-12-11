import { motion } from "framer-motion";

interface ResultsScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const ResultsScreen = ({ score, total, onRestart }: ResultsScreenProps) => {
  const percentage = Math.round((score / total) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-[400px]"
    >
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xs text-muted-foreground mb-6 px-4 py-1 rounded-full bg-white border border-[#96E5FF]/20"
      >
        Keep Learning!
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-title text-3xl italic quiz-title-gradient mb-4"
      >
        Your Final score is
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="flex items-baseline gap-1 mb-8"
      >
        <span className="font-title text-6xl font-bold quiz-title-gradient">
          {percentage}
        </span>
        <span className="font-title text-2xl quiz-title-gradient">%</span>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onRestart}
        className="px-8 py-2.5 rounded-lg bg-[#15313D] text-white text-sm font-medium transition-all duration-1000 ease-out hover:opacity-90"
      >
        Start Again
      </motion.button>
    </motion.div>
  );
};

export default ResultsScreen;
