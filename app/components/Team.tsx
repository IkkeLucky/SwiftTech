import Image from "next/image"
import { MotionDiv } from "./motion/MotionDiv"

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Ignacio Marchesini", image: "/images/nachoprofile.jpeg", role: "CEO & Founder, Fullstack" },
    { id: 2, name: "Gonzalo Olivera", image: "/images/gonprofile.png", role: "Co-Founder, Fullstack" },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-center mb-12 text-primary dark:text-white">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {teamMembers.map((member) => (
            <MotionDiv
              key={member.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-secondary dark:border-gray-700">
              <Image
                src={member.image || "/images/placeholder.svg"}
                alt={member.name}
                width={160}
                  height={160}
                  className="object-cover w-full h-full"
              />
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-white text-center mb-2">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{member.role}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team

