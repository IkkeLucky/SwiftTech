"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const PricingPage = () => {
  const pricingOptions = [
    {
      title: "WordPress Landing Page",
      description: "Perfect for small businesses and startups",
      price: "€450",
      features: ["Custom WordPress theme", "Responsive design", "Basic SEO optimization", "Contact form integration", "Standard 3 pages pricing", "Fastest of them all, one day setup"],
    },
    {
      title: "Custom Next.js Website",
      description: "Ideal for growing businesses and to take it a level further from your common wordpress page",
      price: "€800",
      features: [
        "Latest technologies with Next.js and React",
        "Advanced features and interactivity",
        "Peak performance indicators",
        "Totally customizable design from scratch",
        "Dedicated member from SwiftTech to contact at anytime",
        "More functionalities, messages via email, contact, social network management, content creation",
        "Depending on specifics, medium point in speed, from 3 days up to a week"
      ],
    },
    {
      title: "Custom Application",
      description: "For businesses requiring complex solutions and aplications",
      price: "Let's Talk",
      features: ["Fully custom web or mobile app", "E-commerce functionality", "Admin systems", "API integrations"],
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Our Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-primary">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-3xl font-bold mb-4 text-primary">{option.price}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-secondary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-primary hover:bg-gray-700 text-white dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white"
                    asChild
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default PricingPage

