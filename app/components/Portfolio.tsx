"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Masonry from "react-masonry-css"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      image: "/placeholder.svg?height=300&width=400",
      description: "A fully responsive e-commerce platform",
      height: 300,
    },
    {
      id: 2,
      title: "Mobile App",
      image: "/placeholder.svg?height=400&width=400",
      description: "An innovative mobile app for iOS and Android",
      height: 400,
    },
    {
      id: 3,
      title: "Corporate Website",
      image: "/placeholder.svg?height=250&width=400",
      description: "A sleek website for a Fortune 500 company",
      height: 250,
    },
    {
      id: 4,
      title: "Blog Platform",
      image: "/placeholder.svg?height=350&width=400",
      description: "A customizable blog platform for content creators",
      height: 350,
    },
    {
      id: 5,
      title: "Portfolio Site",
      image: "/placeholder.svg?height=450&width=400",
      description: "A stunning portfolio site for artists",
      height: 450,
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      image: "/placeholder.svg?height=280&width=400",
      description: "An all-in-one social media management tool",
      height: 280,
    },
  ]

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  }

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary dark:text-white">Our Work</h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="mb-4 relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={project.height}
                className="w-full h-auto"
              />
              <motion.div
                className="absolute inset-0 bg-primary bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              >
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </div>
  )
}

export default Portfolio

