export const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -100, // Start from left
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // Reduce duration for quicker animations
        delay: delay,
      },
    },
  };
};

export const SlideLeft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100, // Start from right
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // Reduce duration for quicker animations
        delay: delay,
      },
    },
  };
};

export const SlideUp = (delay = 0) => ({
  initial: {
    y: "-20%", // Only slightly out of view
    opacity: 0,
  },
  animate: {
    y: "0%", // Moves it back to its normal position
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: "easeInOut",
    },
  },
});
