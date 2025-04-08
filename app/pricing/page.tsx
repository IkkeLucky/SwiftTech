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
      features: [
        "Custom WordPress theme", 
        "Responsive design", 
        "Basic SEO optimization", 
        "Contact form integration", 
        "Standard 3 pages pricing", 
        "Fastest of them all, one day setup",
      ],
      purchaseLink: "https://buy.stripe.com/28o9AQfdv6N50mc288", // Add your payment link here
    },
    {
      title: "Custom Next.js Website",
      description: "More than your common Wordpress page",
      price: "€800",
      features: [
        "Latest tech with Next.js and React",
        "Peak performance indicators",
        "Fully customizable design",
        "Dedicated member from SwiftTech",
        "More customizable functionalities",
        "From 3 to 7 days fully functional"
      ],
      purchaseLink: "https://buy.stripe.com/4gw8wM1mF3AT6KA289", // Add your payment link here
    },
    {
      title: "Custom Application",
      description: "For businesses requiring complex apps",
      price: "Let's Talk",
      features: [
        "Fully custom web or mobile app",
        "Databases, users, authentication", 
        "E-commerce functionality", 
        "Appointment system functionality", 
        "Admin systems, API integration", 
        "Large projects, up to weeks or months",
      ],
      purchaseLink: null, // No purchase link for "Let's Talk" option
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
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button
                    className="w-full bg-primary hover:bg-gray-700 text-white dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white"
                    asChild
                  >
                    <Link href="/contact">More Details</Link>
                  </Button>
                  {option.purchaseLink && (
                    <Button
                      variant="outline"
                      className="w-full text-primary border-primary hover:bg-primary hover:text-white"
                      asChild
                    >
                      <Link href={option.purchaseLink} target="_blank" rel="noopener noreferrer">
                        Buy your app now
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <h1 className="text-4xl font-bold text-center mb-1 mt-12 text-primary">We also offer payments on montly installments</h1>
        
      </div>
    </motion.div>
  )
}

export default PricingPage