"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Masonry from "react-masonry-css"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "PassarellaDiosa E-commerce Website",
      image: "/images/passarelladiosa.png?height=300&width=400",
      description: "A fully responsive e-commerce platform",
      height: 300,
      link: "https://www.passarelladiosa.com/"
    },
    {
      id: 2,
      title: "BBGestore",
      image: "/images/bbgestore.png?height=400&width=400",
      description: "Management system and appointments",
      height: 400,
      link: "https://bbgestore123gestore.vercel.app/"
    },
    {
      id: 3,
      title: "Corporate Website",
      image: "/images/wordpressbb.png?height=250&width=400",
      description: "A smooth Wordpress website for an Italian company",
      height: 250,
      link: "https://coopbarbarab.it/"
    },
    {
      id: 4,
      title: "Portfolio Website",
      image: "/images/stackpage.png?height=350&width=400",
      description: "A customizable portfolio platform to showcase the company tech stack",
      height: 350,
      link: "https://barbarabapps.com/"
    },
    {
      id: 5,
      title: "Maemories Social Network",
      image: "/images/maemories.png?height=450&width=400",
      description: "A stunning social network for an Italian company",
      height: 450,
      link: "https://maemories.com/"
    },
    {
      id: 6,
      title: "Marriage appointment app",
      image: "/images/casamientoapp.png?height=280&width=400",
      description: "Marriage app with appointment system and information about the ceremony",
      height: 280,
      link: "https://web-production-ab65.up.railway.app/"
    },
  ]

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  }

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-[1890px] mx-auto px-4 sm:px-6 lg:px-8">
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
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
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
                  <span className="mt-4 inline-block bg-white text-primary dark:bg-gray-900 dark:text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors duration-300">
                      View Project
                  </span>
                </div>
              </motion.div>
              </Link>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </div>
  )
}

export default Portfolio

