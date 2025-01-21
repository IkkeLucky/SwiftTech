import { MotionDiv } from './motion/MotionDiv'

const Banner = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary text-primary py-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold">Transforming Ideas into Digital Reality</h2>
      </div>
    </MotionDiv>
  )
}

export default Banner

