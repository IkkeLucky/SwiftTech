"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alice Johnson",
      comment: "Excellent service! They delivered our website on time and exceeded our expectations.",
    },
    { id: 2, name: "Bob Williams", comment: "The team was very professional and responsive. Our app looks great!" },
    {
      id: 3,
      name: "Carol Davis",
      comment: "We're very happy with our new e-commerce site. It's user-friendly and looks amazing.",
    },
    {
      id: 4,
      name: "David Brown",
      comment: "Outstanding work on our corporate website. It perfectly represents our brand.",
    },
    {
      id: 5,
      name: "Eva Martinez",
      comment: "The mobile app they developed for us has significantly improved our customer engagement.",
    },
  ]

  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary dark:text-white">Customer Reviews</h2>
        <div className="relative h-64">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">{reviews[currentReview].comment}</p>
                <p className="font-semibold text-primary dark:text-white">{reviews[currentReview].name}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Reviews

