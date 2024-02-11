"use client";
import { use, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  MotionValue
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { ParallaxProps } from "../../components/interfaces";
import React from "react";

export function ParallaxText({ children, baseVelocity = 100, leftShift = -20, 
  rightShift=-70, widthupper, widthlower, numofchildren = 3}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (x) => `${wrap(leftShift, rightShift, x)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const renderedChildren: React.ReactNode[] = [];

  // Loop to create and add child elements to the renderedChildren array
  for (let i = 0; i < numofchildren; i++) {
    React.Children.toArray(children).forEach((child, index) => {
      renderedChildren.push(
        <span key={index} className='block mr-10'>
          {child}
        </span>
      );
    });
  }
  // const marqueeVariants = {
  //   animate: {
  //     x: [0, -1000],
  //     transition: {
  //       x: {
  //         repeat: Infinity,
  //         repeatType: "loop",
  //         duration: 5,
  //         ease: "linear",
  //       },
  //     },
  //   },
  // };
  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className={`h-16 ${widthupper} relative overflow-hidden`}>
      <motion.div 
        style={{ x }}
        className={`flex whitespace-nowrap ${widthlower} absolute overflow-hidden`}>
          {/* {React.Children.toArray(children).map((child, index) => (
            <span key={index} className='block mr-10'>
              {child}
            </span>
            ))
            } */}
          {renderedChildren}
          
      </motion.div>
    </div>
  );
}
