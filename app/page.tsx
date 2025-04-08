import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Team from "./components/Team";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Portfolio />
      <Team />
      <Reviews />
      <CTA />
    </div>
  )
}

