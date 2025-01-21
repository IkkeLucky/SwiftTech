"use client"

import { motion, type HTMLMotionProps } from "framer-motion"

export const MotionDiv: React.FC<HTMLMotionProps<"div">> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>
}

