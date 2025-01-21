import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ThemeProvider } from "./contexts/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Software Company",
  description: "We create websites and apps",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider>
          <Navbar />
          <div className="pt-16">
            {" "}
            {/* Add padding-top to account for fixed navbar */}
            <main>{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

