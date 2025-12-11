import { motion } from "framer-motion";

interface ProgressBarProps {
  total: number;
  current: number;
}

const ProgressBar = ({ total, current }: ProgressBarProps) => {
  return (
    <div className="flex gap-2 justify-center mb-8">
      {Array.from({ length: total }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className={`h-1 w-16 rounded-full transition-colors duration-300 ${
            index <= current
              ? "bg-[#15313D]"
              : "bg-[#D9F4FA]"
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
