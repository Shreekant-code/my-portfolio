import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import animation from "../Animation/loading.json";
import { motion } from "framer-motion";
const MotionDiv = motion.div;
import "../App.css";

export const LoadingScreen = () => {
  return (
    <div className="box-first">
      <MotionDiv
        className="animation-box"
        initial={{ scale: 0.5, rotateY: -90, opacity: 0 }}
        animate={{ scale: 1, rotateY: 0, opacity: 1 }}
        exit={{ scale: 0.8, rotateY: 90, opacity: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          type: "spring",
          stiffness: 80,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Lottie animationData={animation} loop={true} className="loading" />

        <MotionDiv
          className="loading-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Typewriter
            options={{
              strings: [
                "Welcome to My Portfolio",
                "Crafting Code with Creativity",
                "Building Beautiful Web Experiences",
              ],
              autoStart: true,
              loop: true,
              delay: 5,
              deleteSpeed: 15,
            }}
          />
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};
