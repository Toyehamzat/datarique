// Framer Motion Animation Variants and Constants

export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// Transition configurations
export const defaultTransition = {
  duration: 0.5,
  ease: "easeOut" as const,
};

export const slowTransition = {
  duration: 0.8,
  ease: "easeOut" as const,
};

export const fastTransition = {
  duration: 0.3,
  ease: "easeInOut" as const,
};

export const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};

// Stagger configurations
export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerChildrenFast = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Viewport configurations for scroll animations
export const defaultViewport = {
  once: true,
  amount: 0.3,
};

export const halfViewport = {
  once: true,
  amount: 0.5,
};

export const fullViewport = {
  once: true,
  amount: 0.8,
};
