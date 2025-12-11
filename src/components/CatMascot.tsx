import { motion } from "framer-motion";
import catPawGif from "@/assets/cat-paw.gif";
import bestOfLuckImg from "@/assets/best-of-luck.png";

const CatMascot = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex items-end gap-1"
    >
      {/* Speech Bubble - using exact Figma image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className="mb-10"
      >
        <img
          src={bestOfLuckImg}
          alt="Best of Luck!"
          className="w-32 h-auto"
        />
      </motion.div>

      {/* Cat Paw - positioned below speech bubble pointer */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-20 h-20 -ml-6"
      >
        <img
          src={catPawGif}
          alt="Cute cat paw waving"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default CatMascot;
