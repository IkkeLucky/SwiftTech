import Link from "next/link"
import { MotionDiv } from "./motion/MotionDiv"

const CTA = () => {
  return (
    <div className="bg-primary dark:bg-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-4 text-white"
        >
          Ready to Start Your Project?
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-blue-100 dark:text-gray-300 mb-8"
        >
          Lets turn your vision into reality. Check out our pricing options and get started today!
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/pricing"
            className="inline-block bg-white dark:bg-gray-900 text-primary dark:text-white font-semibold py-3 px-8 rounded-full hover:bg-secondary hover:text-white dark:hover:bg-gray-700 transition duration-300"
          >
            See Pricing
          </Link>
        </MotionDiv>
      </div>
    </div>
  )
}

export default CTA

