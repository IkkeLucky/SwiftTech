"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MotionDiv } from "./motion/MotionDiv"

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-blue-600 dark:from-gray-800 dark:to-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <MotionDiv
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <Image src="/placeholder.svg" alt="Company Logo" width={300} height={100} className="rounded-lg shadow-lg" />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold text-white mb-4">We Create Stunning Websites and Apps</h1>
          <p className="text-xl text-blue-100 dark:text-gray-300 mb-6">
            Our team of expert developers and designers bring your digital vision to life.
          </p>
          <Button variant="secondary" size="lg">
            Get Started
          </Button>
        </MotionDiv>
      </div>
    </div>
  )
}

export default Hero

