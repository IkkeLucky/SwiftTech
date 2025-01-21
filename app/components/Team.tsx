import Image from "next/image"
import { MotionDiv } from "./motion/MotionDiv"

const Team = () => {
  const teamMembers = [
    { id: 1, name: "John Doe", image: "/placeholder.svg", role: "CEO & Founder" },
    { id: 2, name: "Jane Smith", image: "/placeholder.svg", role: "CTO" },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary dark:text-white">Our Team</h2>
        <div className="flex justify-center space-x-12">
          {teamMembers.map((member) => (
            <MotionDiv
              key={member.id}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mb-4 border-4 border-secondary dark:border-gray-700"
              />
              <h3 className="text-xl font-semibold text-primary dark:text-white">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team

