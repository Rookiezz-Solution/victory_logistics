import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxLayer = ({ children, offset = 50, className, tag = 'div' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${offset}px`, `${offset}px`]);
  const MotionComponent = motion[tag];

  return (
    <MotionComponent ref={ref} style={{ y }} className={className}>
      {children}
    </MotionComponent>
  );
};

export default ParallaxLayer;