"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"

interface Project {
  id: number
  title: string
  image: string
  description: string
}

interface VerticalSpinningCardProps {
  project: Project
  isActive: boolean
  zIndex: number
}

const VerticalSpinningCard: React.FC<VerticalSpinningCardProps> = ({ project, isActive, zIndex }) => {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  const variants = {
    spin: {
      rotateX: [0, 360],
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
    stop: {
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      style={{
        zIndex,
        perspective: "1000px",
      }}
      animate={isActive ? (isHovered ? "stop" : "spin") : "stop"}
      variants={variants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default VerticalSpinningCard

